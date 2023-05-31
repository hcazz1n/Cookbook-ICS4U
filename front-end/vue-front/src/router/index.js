import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '/', name: 'Home', component: () => import('../views/HomeView.vue')},
    {path: '/account', name: 'Account', component: () => import('../views/AccountView.vue')},
    {path: '/contact', name: 'Contact Us', component: () => import('../views/ContactView.vue')},
    {path: '/recipeselector', name: 'Recipe Selector', component: () => import('../views/RecipeSelector.vue')},
    {path: '/recipes', name: 'Recipes', component: () => import('../views/RecipeView.vue')},
    {path: '/login', name: 'Login', component: () => import('../views/LoginView.vue')},
    {path: '/register', name: 'Register', component: () => import('../views/RegisterView.vue')},
    {path: '/test', name: 'Test', component: () => import('../views/TestView.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition){
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => resolve({top: 0}, 300))
        })
    },
})

export default router