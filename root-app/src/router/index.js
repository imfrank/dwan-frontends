import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/account/login'
import layout from '@/views/shared/_layout'
import overview from '@/views/workbench/overview'
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
      component: layout,
      name:'layout',
      redirect:'/workbench/overview',
      children:[        
        {
          path: '/workbench/overview',
          component: overview,         
        },     
        {
          path:'/product/list',
          name:'product',
          meta: {
            title: 'vue',
            icon: 'appstore',          
            subApp: true
          }
        },
        {
          path:'/ordering/list',
          name:'ordering',
          meta:{
            title:'ordering',
            icon:'appstore',
            subApp:true
          }
        }
      ]     
    }
  ]
})
