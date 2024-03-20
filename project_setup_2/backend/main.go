package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var db *gorm.DB

type Todo struct {
	gorm.Model
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

func initDB() {
	var err error
	// Update the connection string for MySQL
	db, err = gorm.Open("mysql", "jo:password@/tododb?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		log.Fatal("Database connection failed:", err)
	}
	db.AutoMigrate(&Todo{})
}

func main() {

	initDB()
	defer db.Close()

	router := mux.NewRouter()
	router.HandleFunc("/todos", getTodos).Methods("GET")
	router.HandleFunc("/todos", createTodo).Methods("POST")
	router.HandleFunc("/todos/{id}", updateTodo).Methods("PUT")
	router.HandleFunc("/todos/{id}", deleteTodo)

	fmt.Println("Server is listening on port 8080")
	//log.Fatal(http.ListenAndServe(":8080", router))
	http.ListenAndServe(":8080", corsHandler(router))
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

func getTodos(w http.ResponseWriter, r *http.Request) {
	var todos []Todo
	db.Find(&todos)
	json.NewEncoder(w).Encode(todos)
}

func createTodo(w http.ResponseWriter, r *http.Request) {
	var todo Todo
	json.NewDecoder(r.Body).Decode(&todo)
	db.Create(&todo)
	json.NewEncoder(w).Encode(todo)
}

func updateTodo(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var todo Todo
	db.First(&todo, params["id"])
	json.NewDecoder(r.Body).Decode(&todo)
	db.Save(&todo)
	json.NewEncoder(w).Encode(todo)
}
func deleteTodo(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var todo Todo
	db.First(&todo, params["id"])
	db.Delete(&todo)
	fmt.Fprintf(w, "Todo with ID %s has been deleted", params["id"])
}



