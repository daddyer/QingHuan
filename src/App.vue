<template>
  <div id="app">
    <appHeader/>
    <div class="main">
      <div v-if="!loading">
      <!-- <keep-alive> -->
        <router-view></router-view>
      </div>
      <div class="homeLoading" v-else>
        <img src="https://ws1.sinaimg.cn/large/b7da53dbgy1fy1vo8432ig206o0503z0.gif">
      </div>
    </div>
    <appFooter class="footer"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    'appHeader': Header,
    'appFooter': Footer
  },
  mounted(){
    // 提示广告
    // this.$Notice.warning({
    //   title: '声明',
    //   desc: '观看视频过程中出现的广告与本站无关,是本站调用的接口投放的广告!!!请勿点击广告也勿相信广告内容!!!',
    //   duration: 0
    // })
  },
  computed:{
    ...mapState({
      'loading': state => state.system.loading,
      'home': state => state.home.carousel
    })
  }
}
</script>

<style>
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar{
  width: .5em;
  background-color: rgb(245, 245, 245);
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #31c27c;
}

html,body{
  height: 100%;
}
#app{
  background-color: rgb(244, 244, 244)
}
.main{
  min-height: calc(100vh - 81px);
  margin: 0 auto;
}

.homeLoading{
  max-width: 240px;
  margin: 0 auto;
  padding-top: 15em;
}
</style>
