import axios from 'axios'
import store from '../store/store'
import { LoadingBar } from 'iview'

const baseUrl = '/api/'

const die = () => {
  document.getElementById('app').innerHTML = `<h1 style="text-align:center;background:#fff;padding-top:20%">🛸 服务器和我们失联了😱</h1>`
  return false
}

const api = {
  // 获取主页数据
  get_home_data(){
    LoadingBar.start()
    return axios.get(baseUrl + 'home')
    .then(Response => {
      store.dispatch('homeUpdate', Response.data)
      LoadingBar.finish()
      store.dispatch('loaded')
    })
    .catch(e => {
      die()
      console.log(`飘红是不可能飘红的，这辈子不可能飘红。`)
    })
  },

  get_channl_data(channl = 'dianying', type = 'all', year = 'all', arear = 'all', page = 'all'){
    LoadingBar.start()
    return axios.get(`${baseUrl}list/${channl}/${type}/${year}/${arear}/${page}`)
      .then(Response => {
        store.dispatch('updataDir', Response.data)
        LoadingBar.finish()
        store.dispatch('loaded')
      })
      .catch(e => {
        console.log(`飘红是不可能飘红的，这辈子不可能飘红。`)
      })
  },

  get_cover_data(id){
    LoadingBar.start()
    return axios.get(`${baseUrl}cover/${id}`)
    .then(Response => {
      store.dispatch('palyerUpdate', Response.data)
      LoadingBar.finish()
      store.dispatch('loaded')
    })
    .catch(e => {
      die()
      console.log(`飘红是不可能飘红的，这辈子不可能飘红。`)
    })
  }
}


export default api