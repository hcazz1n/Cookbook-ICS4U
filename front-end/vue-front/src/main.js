import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import VueScrollTo from 'vue-scrollto'

createApp(App)
.use(router)
.use(VueScrollTo)
.mount('#app')
