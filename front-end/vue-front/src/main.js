import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import VueScrollTo from 'vue-scrollto'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)

createApp(App)
.use(router)
.use(VueScrollTo)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
