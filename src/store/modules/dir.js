const dir = {
  state: {
    type: [],
    years: [],
    areas: [],
    page_count: 0,
    content: []
  },
  mutations: {
    updataDir(state, data){
      state.type = data.cats
      state.years = data.years
      state.areas = data.areas
      state.page_count = data.page_count
      state.content = data.res
    }
  },
  actions: {
    updataDir(context, data){
      console.log(data)
      context.commit('updataDir', data)
    }
  }
}

export default dir