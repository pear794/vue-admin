import Vue from 'vue'
import App from './App.vue'

import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import axios from 'axios'
import VueRouter from 'vue-router';
import routes from './router'

Vue.use(ElementUI, { locale })
Vue.use(VueRouter) //踩坑

Vue.config.productionTip = false
Vue.prototype.axios = axios


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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
