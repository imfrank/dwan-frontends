import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/account/login'
import layout from '@/views/shared/_layout'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      children:[
        {
          path:'/product',
          name:'product',
          meta: {
            title: 'vue',
            icon: 'appstore',          
            subApp: true
          }
        }
      ]     
    }
  ]
})
