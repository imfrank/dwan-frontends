import Vue from 'vue';
import VueRouter from 'vue-router';
import templateList from '@/views/adEmail/templateList'
import emailImport from '@/views/adEmail/emailImport'
Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'index',
    component: templateList
  },
  {
    path: '/adEmail/templateList',
    name: 'templateList',
    component: templateList
  },
  {
    path: '/adEmail/emailImport',
    name: 'emailImport',
    component: emailImport
  }
];

export default routes;