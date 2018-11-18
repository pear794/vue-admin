import Vue from 'vue'
import App from './App.vue'

import store from './store'
import ElementUI from 'element-ui'
//import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
//import axios from 'axios'
import VueRouter from 'vue-router';
import routes from './router'
import Mock from './mock' //引入mock模拟数据，实际开发应注释，会拦截axios

Vue.use(ElementUI)

Vue.use(VueRouter) //踩坑(忘了引入)

//Vue.prototype.axios = axios //将axios挂载到vue原型上
Mock.bootstrap();

//路由守卫
const router = new VueRouter({
  routes
})

router.beforeEach( (to, from, next) => {
  if(to.path == '/login'){
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
