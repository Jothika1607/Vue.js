<template>
  <div id="app">
    <h1>TODO List</h1>
    <div class="todo-input">
      <input type="text" v-model="newTodo" placeholder="Add a new todo">
      <button @click="addTodo">Add</button>
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <div class="todo-content">
          
          <input type="checkbox" v-model="todo.completed">
          <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
        </div>
        <div class="todo-actions">
          <button @click="updateTodo(todo)">Update</button>
          <button @click="deleteTodo(todo.id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      newTodo: ''
    }
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      axios.get('http://localhost:8080/todos')
        .then(response => {
          this.todos = response.data;
        })
        .catch(error => {
          console.error('Error fetching todos:', error);
        });
    },
    addTodo() {
      axios.post('http://localhost:8080/todos', {
        title: this.newTodo,
        completed: false
      })
        .then(response => {
          this.todos.push(response.data);
          this.newTodo = '';
        })
        .catch(error => {
          console.error('Error adding todo:', error);
        });
    },
    updateTodo(todo) {
      axios.put(`http://localhost:8080/todos/${todo.id}`, {
        title: todo.title,
        completed: todo.completed
      })
        .catch(error => {
          console.error('Error updating todo:', error);
        });
    },
   deleteTodo(id) {
      axios.delete(`http://localhost:8080/todos/${id}`)
        .then(() => {
          this.todos = this.todos.filter(todo => todo.id !== id);
        })
        .catch(error => {
          console.error('Error deleting todo:', error);
        });
    }

  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.todo-input {
  display: flex;
  margin-bottom: 20px;
}

.todo-input input[type="text"] {
  flex: 1;
  padding: 8px;
  margin-right: 10px;
}

.todo-input button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.todo-input button:hover {
  background-color: #0056b3;
}

ul {
  list-style-type: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.todo-content {
  flex: 1;
}

.todo-actions button {
  margin-left: 10px;
  padding: 6px 12px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.todo-actions button:hover {
  background-color: #c82333;
}

.todo-image {
  width: 50px;
  height: 50px;
  margin-left: 20px;
}
</style>
