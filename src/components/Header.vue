<template>
  <header>
    <div class="logo">
      <a href="/" :logo="name">{{name}}</a>
    </div>
    <div class="nav">
      <ul class="menu">
        <li v-for="(m,index) in menu" :class="{'active': sele == m.path }" @click="go(index)">{{m.name}}</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      name:'清欢影视',
      menu:[
        {name: '首页', path: '/'},
        {name: '电影', path: '/dir/dianying'},
        {name: '电视', path: '/dir/dianshi'},
        {name: '综艺', path: '/dir/zongyi'},
        {name: '动漫', path: '/dir/dongman'},
        // {name: '解析', path: '/analysis'}
      ]
    }
  },
  methods: {
    go(index){
      this.$router.push({ path: this.menu[index].path })
    },
  },
  computed:{
    sele(){
      return this.$route.path
    }
  },
  watch:{
    // 修改 title
    sele(){
      let t = this.menu.filter( m => {
        return this.sele == m.path
      })[0]
      if(t == undefined) {
        t = '正在播放 | 清欢影视'
      }else{
        t = t.name  + ' | 清欢影视'
      }
      document.title = t
    }
  }
}
</script>

<style scoped>
header{
  background-color: #fff;
}
header .logo{
  font-size: 2em;
  display: inline-block;
  width: 39%;
  text-align: center;
}
header .logo a::before{
  content: attr(logo);
  position: absolute;
  z-index: 10;
  color: pink;
  -webkit-mask:linear-gradient(to left, #6d78ff, transparent );
}
header .nav{
  display: inline-block;
  width: 61%;
  text-align: center;
}
.menu li{
  font-size: 1.53em;
  display: inline-block;
  padding: .5em;
  /* width: 4.59em; */
  font-weight: 200;
  cursor: pointer;
}
.menu .active{
  /* font-size: 2em; */
  color: #31c27c;
}
</style>
