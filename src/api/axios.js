import axios from 'axios'
import store from '../store/store'
import { LoadingBar } from 'iview'

const die = () => {
  document.getElementById('app').innerHTML = `<h1 style="text-align:center;background:#fff;padding-top:20%">🛸 服务器和我们失联了😱</h1>`
  return false
}

const instance = axios.create({
  timeout: 10000,
  headers: {
    'Accept': 'application/json; charset=utf-8'
  }
})

// http请求拦截器
instance.interceptors.request.use(
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
instance.interceptors.response.use(
  r => {
    return r.data
  }, 
  error => {
    die()
    LoadingBar.error()
    return Promise.reject(error)
  }
)
export default instance