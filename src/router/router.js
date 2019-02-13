import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dir/:channl',
      name: 'dir',
      component: () => import('../views/Dir.vue')
    },
    {
      path: '/:channl/:id',
      name: 'player',
      component: () => import('../views/Player.vue')
    },
    {
      path: '/*',
      name: 'notfound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})
