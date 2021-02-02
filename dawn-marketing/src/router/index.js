import Vue from 'vue';
import VueRouter from 'vue-router';
import templateList from '@/views/adEmail/templateList'

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'index',
    component: templateList
  },
  {
    path: '/adEmail/templateList',
    name: 'productList',
    component: templateList
  }
];

export default routes;