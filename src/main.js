import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import ElementUI from 'element-ui'

/* mport '@/styles/reset.css' */

//import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
//import axios from 'axios'
import VueRouter from 'vue-router';
import routes from './router' //引入样式重置表
import Mock from './mock' //引入mock模拟数据，实际开发应注释，会拦截axios
import 'font-awesome/css/font-awesome.min.css'
//element-ui的扩展样式
//import './assets/theme/theme-darkblue/index.css'

Vue.use(ElementUI)


Vue.use(VueRouter) //踩坑(忘了引入)

//Vue.prototype.axios = axios //将axios挂载到vue原型上
Mock.bootstrap();
  
//引入富文本插件
import VueQuillEditor from 'vue-quill-editor'
//引入富文本样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor) 


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


