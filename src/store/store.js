import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import system from './modules/system'
import dir from './modules/dir'
import player from './modules/player'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    system,
    dir,
    player
  }
})
