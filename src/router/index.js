import { createRouter, createWebHistory } from 'vue-router'

import Home from "../components/pages/Home.vue"
import Dynamic from '../components/pages/Dynamic.vue'
import Product from "../components/pages/Product.vue"
import Buy from '../components/pages/Buy.vue'
import Ground from "../components/pages/Ground.vue"
import Join from '../components/pages/Join.vue'
import Cooperation from "../components/pages/Cooperation.vue"
import About from '../components/pages/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: Dynamic
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/ground',
      name: 'ground',
      component: Ground
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: Cooperation
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    },
    
  ]
})

export default router
