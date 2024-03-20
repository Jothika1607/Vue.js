//router.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/LoginPage.vue';
import Register from './components/RegistrationPage.vue';
import Dashboard from './views/DashboardPage.vue';

const routes = [
  { path: '/', redirect: '/register' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
