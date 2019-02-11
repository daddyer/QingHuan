const player = {
  state: {
    info: [],
    pages: [],
    video: ''
  },
  mutations: {
    palyerUpdate(state, data){
      if(data.info != undefined && data.info != ''){
        state.info = data.info
      }
      if (data.pages != undefined && data.pages != '') {
        state.pages = data.pages
      }
      if (data.video != undefined && data.video != '') {
        state.video = data.video
      }
    }
  },
  actions: {
    palyerUpdate(context, data){
      context.commit('palyerUpdate',data)
    }
  }
}

export default player