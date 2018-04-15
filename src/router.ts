import Vue from 'vue'
import Router from 'vue-router'
import About from './front/views/About.vue'
import Home from './front/views/Home.vue'
import Login from './front/views/Login.vue'
import Dashboard from './front/views/Dashboard.vue'

Vue.use(Router)

// const mode = 'history'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  }
]

export default new Router({
  routes
})
