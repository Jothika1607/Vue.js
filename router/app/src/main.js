import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue';
import VueRouter from 'vue-router'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'

Vue.use(VueRouter);
const Routes=[
    {path:'/', component :HomePage},
    {path:'/About', component :AboutPage}
]
//const router= new VueRouter({
    //router
//})
Vue.config.producionTip=false
createApp(App).mount('#app')
