//import Vue from 'vue'
//import Router from 'vue-router'
import Home from './pages/Home.vue'

//Vue.use(Router)


let routes = [
    {
      path : '/login',
      component : () => import('../src/pages/Login.vue'),
      name : '',
      hidden : true
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },

  ]

export default routes;