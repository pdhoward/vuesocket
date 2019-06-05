import Vue from 'vue';
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import VueI18n from 'vue-i18n'
import Vuelidate from 'vuelidate';
import App from './App.vue';
import store from "./store";
import router from "./router"
import translations from "./resources/translations";
import './registerServiceWorker'
Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(Vuelidate);

Vue.config.formApiUrl = process.env.FORM_API_URL;

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: translations
})

// set end point for testing 
let devendpoint = "http://localhost:3100/test"
let prodendpoint = "https://chaotic.ngrok.io/test"

if (process.env.NODE_ENV === 'development') {
  console.log(`DEV TEST ENDPOINT SET`)
  Vue.config.formApiUrl = devendpoint
} else {
  console.log(`PROD TEST ENDPOINT SET`)
  Vue.config.formApiUrl = prodendpoint
}


new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount(`#app`);
