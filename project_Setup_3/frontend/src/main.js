//main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);

// Change the backend URL to localhost:8080
app.config.globalProperties.$backendUrl = 'http://localhost:8080';

app.mount('#app');
