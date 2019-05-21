import Vue from 'vue';
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import App from './App.vue';
import store from "./store";

/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(function(registration) {
      console.log(
        'Service Worker registration successful with scope: ',
        registration.scope
      );
    })
    .catch(function(err) {
      console.log('Service Worker registration failed: ', err);
    });
}
*/
Vue.config.productionTip = false;
/*
const requireComponent = require.context(  
  './components',  
  false,  
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {  
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(     
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  
  Vue.component(
    componentName,    
    componentConfig.default || componentConfig
  )
})
*/
new Vue({
  store,
  render: h => h(App),
}).$mount(`#app`);
