// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import 'babel-polyfill';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuex);
Vue.use(Element, {
  size: 'small'
});
Vue.use(require('vue-moment'));
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
