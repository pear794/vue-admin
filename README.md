# vue-admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### 初衷
```
很感谢制作这个框架的人，当初项目需要一个后台模板，通过百度找到了这款vue + element的模板，但是在使用的过程中，发现了几个bug，
安装插件导致项目崩溃，正好当时vue-cli发布3.0版本，所以就想着何不把框架自己重构一遍
```
### 演示地址

* [演示地址:http://www.buaili.com](http://www.buaili.com)

### 全局样式

* 全局样式都写在app.vue里面，可以修改

### 优化
```
1.插件版本老化，新安装插件可能会引起冲突，升级cli版本重构
     vue version : 2.5.17
     vue-cli : 3.03
     element-ui : 2.4.9
2.修复导航栏缩放边缘空白问题 
3.使用异步组件+路由懒加载优化首屏时间
```
### 膜法
``` js
🐸 ++
```