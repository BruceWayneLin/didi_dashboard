import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import apiUrl from './apiUrl'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  apiUrl,
  render: h => h(App)
}).$mount('#app')
