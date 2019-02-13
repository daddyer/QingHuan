<template>
  <div class="filmre">
    <div class="title">{{title}}</div>
    <div class="item" v-for="(i,index) in list.title" @click="go(index)">
      <!-- <div class="icon"><img src="../../assets/player.png" alt="立即观看"></div> -->
      <div class="cover">
        <img class="cpic" :src="list.pic[index]">
        <img class="vip" src="../../assets/vip.png">
      </div>
      <div class="info">
        <p>{{list.brief[index]}}</p>
        <h3>{{i}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'filmre',
  props: ['title', 'list'],
  methods:{
    go(ovx_1){
      this.$router.push({ path: `/${this.list.link[ovx_1]}` })
    }
  }
}
</script>

<style scoped>
.title{
  font-size: 2em;
  color: #2c3e50;
  padding-left: .5em;
  border-left: .2em solid #31c27c;
  border-radius: .1em;
  margin-top: 2em;
  margin-bottom: .5em;
}
.item{
  background-color: #fff;
  display: inline-block;
  margin: 1em;
  outline: 1px solid #ccc;
  cursor: pointer;
}
.item .cover {
  max-height: 80%;
}
.item .vip{
  position: absolute;
  margin-left: -30px;
  margin-top: 2px;
}
.item .info{
  min-height: 20%;
  padding-left: .7em;
}
.item .cpic{
  min-width: 180px;
  max-height: 240px;
}

</style>
