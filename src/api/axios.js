import axios from 'axios'
import store from '../store/store'
import { LoadingBar } from 'iview'

const die = () => {
  document.getElementById('app').innerHTML = `<h1 style="text-align:center;background:#fff;padding-top:20%">🛸 服务器和我们失联了😱</h1>`
  return false
}

// 超时时间
axios.defaults.timeout = 20000;

// http请求拦截器
axios.interceptors.request.use(
  c => {
    store.dispatch('loading')
    LoadingBar.start()
    return c
  },
  error => {
    die()
    LoadingBar.error()
    return Promise.reject(error)
  }
)

// Response响应拦截器
axios.interceptors.response.use(
  r => {
    // 异步 多等 1s 不然没提交到数据报错
    setTimeout(() => { LoadingBar.finish(); store.dispatch('loaded')},1000);
    return r.data
  }, 
  error => {
    die()
    LoadingBar.error()
    return Promise.reject(error)
  }
)
export default axios