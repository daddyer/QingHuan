import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import api from './api'
import './plugins/iview.js'
import { Notice } from 'iview'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$Notice = Notice
Vue.prototype.$api = api

Vue.use(VueLazyload, {
  preLoad: 1.5,
  loading: 'https://ws1.sinaimg.cn/large/b7da53dbgy1g02mb1bbdnj205g07mt8m.jpg',
  error: 'https://ws1.sinaimg.cn/large/b7da53dbgy1g02mh752x2j20740740tm.jpg',
  attempt: 3
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')