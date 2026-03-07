import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../pages/HomePage.vue'
import CartSummary from '../pages/CartSummary.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/cart-summary', component: CartSummary },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})