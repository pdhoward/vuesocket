import Vue from 'vue';
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import App from './App.vue';
import store from "./store";
import router from "./router"
import './registerServiceWorker'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount(`#app`);
