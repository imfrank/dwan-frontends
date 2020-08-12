// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { registerMicroApps, start, initGlobalState } from 'qiankun';

import render from '../render/VueRender';

render({ loading: true });

const loader = loading => render({ loading });


registerMicroApps([ 
  { name: 'product', entry: '//localhost:5001',   container: '#subapp-viewport',activeRule:'/product',loader },
]);


Vue.config.productionTip = false

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});


//setDefaultMountApp('galaxy-product'); //默认页面
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
start();