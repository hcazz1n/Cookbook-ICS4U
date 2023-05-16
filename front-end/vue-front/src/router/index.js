import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '/', name: 'Home', component: () => import('../views/HomeView.vue')},
    {path: '/account', name: 'Account', component: () => import('../views/AccountView.vue')},
    {path: '/contact', name: 'Contact Us', component: () => import('../views/ContactView.vue')},
    {path: '/recipes', name: 'Recipes', component: () => import('../views/RecipeView.vue')},
    {path: '/login', name: 'Login', component: () => import('../views/LoginView.vue')},
    {path: '/test', name: 'Test', component: () => import('../views/TestView.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router