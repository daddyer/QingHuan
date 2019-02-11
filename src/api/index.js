import axios from './axios'
import store from '../store/store'

const baseUrl = '/api/'

const api = {
  // 获取主页数据
  async get_home_data(){
    await axios.get(baseUrl + 'home')
    .then(Response => {
      store.dispatch('homeUpdate', Response)
    })
    .catch(e => {
      console.log(`飘红是不可能飘红的，这辈子不可能飘红。`)
    })
  },

  get_channl_data: async () => {

  },

  async get_cover_data(id){
    await axios.get(`${baseUrl}cover/${id}`)
    .then(Response => {
      store.dispatch('palyerUpdate', Response)
    })
    .catch(e => {
      console.log(`飘红是不可能飘红的，这辈子不可能飘红。`)
    })
  }
}


export default api