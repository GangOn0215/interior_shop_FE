import { createRouter, createWebHistory } from 'vue-router'
// import VueRouter from 'vue-router'
import routes from '@/router/routers'

// Vue.use(VueRouter)

const router = new createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router