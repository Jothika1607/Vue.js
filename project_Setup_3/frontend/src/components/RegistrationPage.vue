<!-- RegistrationPage.vue -->
<template>
  <div class="registration-container">
    <h2>Registration</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username">Name:</label>
        <input type="text" id="username" v-model="registrationForm.username" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="registrationForm.email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="registrationForm.password" autocomplete="current-password" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toast-notification'; 

export default {
  name: 'RegistrationPage',
  data() {
    return {
      registrationForm: {
        username: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
  async register() {
  try {
    console.log('========================================================');
    await axios.post(`${this.$backendUrl}/register`, this.registrationForm);   
      this.$router.push('/login');
  } catch (error) {
    console.error('Registration error:', error);
    this.showErrorToast('Registration failed. Please try again.');

  }
},

  showErrorToast(message) {
    console.log("toast called");
      const toast = useToast(); // Initialize useToast
      toast.error(message); // Display error toast with the provided message
  }
}
};
</script>




<style scoped>
.registration-container {
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

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}
</style>