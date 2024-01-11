// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './js/router'
import './styles/global.css'

createApp(App).use(router).mount('#app')
