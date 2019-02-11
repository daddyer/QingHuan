const home = {
  state:{
    carousel:[],
    homeData:[],
    tv: {},
    film: {},
    variety: {},
    animation: {},
    rank:[]
  },
  mutations: {
    homeUpdate(state ,data){
      if(data.carousel != undefined && data.carousel != ''){
        state.carousel = data.carousel
      }
      if(data.film != undefined && data.film != ''){
        state.film.title = data.film[4]
        state.film.pic = data.film[2]
        state.film.brief = data.film[6]
        state.film.isVip = data.film[3]
        state.film.link = data.film[1]
      }
      if (data.homeData != undefined && data.homeData != '') {
        // 电视剧
        state.tv.title = data.homeData[4].slice(0,20) // 标题
        state.tv.pic = data.homeData[2].slice(0,20) // 图片
        state.tv.brief = data.homeData[6].slice(0,20) // 简介
        state.tv.link = data.homeData[1].slice(0, 20) // 链接
        // 综艺
        state.variety.title = data.homeData[4].slice(20, 27) // 标题
        state.variety.pic = data.homeData[2].slice(20, 27) // 图片
        state.variety.brief = data.homeData[6].slice(20, 27) // 简介
        state.variety.link = data.homeData[1].slice(20, 27) // 链接
        // 动漫
        state.animation.title = data.homeData[4].slice(27, 36) // 标题
        state.animation.pic = data.homeData[2].slice(27, 36) // 图片
        state.animation.brief = data.homeData[6].slice(27, 36) // 简介
        state.animation.link = data.homeData[1].slice(27, 36) // 链接

      }
      if (data.rank != undefined && data.rank != '') {
        state.rank = data.rank
      }
    }
  },
  actions: {
    homeUpdate(context, data) {
      context.commit('homeUpdate',data)
    }
  }
}

export default home