import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import VueScrollTo from 'vue-scrollto'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import TheRecipeTitlePage from './components/TheRecipeTitlePage.vue'
import TheIngredients from './components/TheIngredients.vue'
import TheInstructions from './components/TheInstructions.vue'
library.add(faUserSecret)

createApp(App)
.use(router)
.use(VueScrollTo)
.component('font-awesome-icon', FontAwesomeIcon)
.component('TheRecipeTitlePage', TheRecipeTitlePage)
.component('TheIngredients', TheIngredients)
.component('TheInstructions', TheInstructions)
.mount('#app')
