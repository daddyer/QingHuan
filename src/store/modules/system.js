const system = {
  state: {
    appName: '清欢影视',
    loading: true,
  },
  mutations: {
    systemUpdate() {
      
    },
    loading(state){
      state.loading = true
    },
    loaded(state){
      state.loading = false
    }
  },
  actions: {
    systemUpdate(context, data) {
      context.commit('systemUpdate', data)
    },
    loading(context){
      context.commit('loading')
    },
    loaded(context){
      context.commit('loaded')
    }
  }
}

export default system