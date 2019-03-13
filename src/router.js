//import Vue from 'vue'
//import Router from 'vue-router'
import Home from './pages/Home.vue'

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
      component: Home,
      name : "导航一",
      iconCls : "el-icon-message", //图标样式class
      children : [
        {
          path : "index",
          component : () => import('./pages/index/Index'),
          name : "主页"
        }
      ]
    },

  ]

export default routes;