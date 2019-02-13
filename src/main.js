import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import api from './api'
import './plugins/iview.js'
import { Notice } from 'iview'

Vue.config.productionTip = false
Vue.prototype.$Notice = Notice
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')