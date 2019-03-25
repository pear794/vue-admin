
import Home from './pages/Home.vue'
import NotFound from './pages/404.vue'

let routes = [
    {
      path : '/login',
      component : () => import('../src/pages/Login.vue'),
      name : '',
      hidden : true
    },
    {
        path : "/404",
        hidden : true,
        component : NotFound,
        name : "",
    },
    {
      path: '/', 
      component: Home,
      name : "导航一",
      iconCls : "el-icon-message", //图标样式class
      children : [
        {
            path : "/index",
            component : () => import('./pages/index/Index'),
            name : "主页1"
        },
        {
            path : "/form",
            component : () => import('./pages/index/Form'),
            name : "Form"
        }
      ]
    },
    {
        path : "/",
        component : Home,
        name : "",
        iconCls : "el-icon-document",
        leaf : true, //只有一个节点
        children : [
            {
                path : "/editor",
                component : () => import('../src/pages/editor/editor.vue'),
                name : "富文本"
            }
        ]
    },
    {
        path : "*",
        hidden : true,
        redirect : { path : "/404" } //重定向
    },
  ]

export default routes;