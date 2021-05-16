import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/login.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
      path: '/data',
      name: 'data',
      component: () => import('../views/Data.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
