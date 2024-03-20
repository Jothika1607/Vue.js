<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="loginForm.email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="loginForm.password" autocomplete="current-password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toast-notification'; 

export default {
  name: 'LoginPage',
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async login() {
      try {
        await axios.post(`${this.$backendUrl}/login`, this.loginForm);
        // Redirect to dashboard or any other page after successful login
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Login error:', error);
        this.showErrorToast('Login failed. Please check your credentials.');
      }
    },

    showErrorToast(message) {
      const toast = useToast();
      toast.error(message);
    }
  }
};
</script>

<style scoped>
.login-container {
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
