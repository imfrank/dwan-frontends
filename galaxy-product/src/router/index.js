import Vue from 'vue';
import VueRouter from 'vue-router';
import productList from '@/views/product/list'

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'login',
    component: productList
  },
  {
    path: '/product/list',
    name: 'productList',
    component: productList
  }
];

export default routes;