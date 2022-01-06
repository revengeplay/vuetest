import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/account/SignIn'
import SignUp from '../views/account/SignUp'
import MainLayout from '../layouts/main/Index'
import AuthLayout from '../layouts/auth/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
      }
    ]
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
