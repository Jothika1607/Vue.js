//main.go
package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"regexp"

	"github.com/gorilla/mux"
	_ "github.com/go-sql-driver/mysql"
)

// User struct represents a user entity
type User struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

// MySQL connection
var db *sql.DB

func initDB() {
	var err error
	db, err = sql.Open("mysql", "jo:password@tcp(localhost:3306)/database_name")
	if err != nil {
		log.Fatal(err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}
}

func main() {
	initDB()
	defer db.Close()

	r := mux.NewRouter()

	// Routes
	r.HandleFunc("/login", login)
	r.HandleFunc("/register", register)
	r.HandleFunc("/dashboard", dashboardHandler).Methods("GET")
	http.ListenAndServe(":8080", corsHandler(r))
}

func login(w http.ResponseWriter, r *http.Request) {
	// Parse request body
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Authenticate user
	var storedUser User
	err = db.QueryRow("SELECT * FROM users WHERE email = ?", user.Email).Scan(&storedUser.Username, &storedUser.Email, &storedUser.Password)
	if err != nil {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		return
	}
	if storedUser.Password != user.Password {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		return
	}

	// Successful login
	w.WriteHeader(http.StatusOK)
}



func corsHandler(handler http.Handler) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Access-Control-Allow-Origin", "http://localhost:8081")
        w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")

        if r.Method == "OPTIONS" {
            // Preflight request
            w.WriteHeader(http.StatusOK)
            return
        }

        handler.ServeHTTP(w, r)
    }
}

func register(w http.ResponseWriter, r *http.Request) {
    // Parse request body
    var user User
    err := json.NewDecoder(r.Body).Decode(&user)
    if err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    // Validate email format
    if !isValidEmail(user.Email) {
        http.Error(w, "Invalid email format", http.StatusBadRequest)
        return
    }

    // Check if user already exists
    var count int
    err = db.QueryRow("SELECT COUNT(*) FROM users WHERE username = ? OR email = ?", user.Username, user.Email).Scan(&count)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    if count > 0 {
        http.Error(w, "User already exists", http.StatusBadRequest)
        return
    }

    // Insert user into the database
    _, err = db.Exec("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", user.Username, user.Email, user.Password)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusCreated)
}

func dashboardHandler(w http.ResponseWriter, r *http.Request) {
	// Extract username from request headers or session
	username := "User" // Replace this with actual username retrieval logic

	// Display dashboard
	fmt.Fprintf(w, "Welcome, %s!", username)
}

func isValidEmail(email string) bool {
	// Regular expression for email validation
	emailRegex := `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`
	return regexp.MustCompile(emailRegex).MatchString(email)
}
