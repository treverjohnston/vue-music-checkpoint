import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tunes from '@/components/Tunes'
import Results from '@/components/Results'
import Register from '@/components/Register'
import Login from '@/components/Log'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/tunes', name: 'Tunes', component: Tunes},
    {path: '/results', name: 'Results', component: Results},
    {path: '/register', name: 'Register', component: Register},
    {path: '/login', name: 'Login', component: Login}
  ]
}) 
