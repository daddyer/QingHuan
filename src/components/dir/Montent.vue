<template>
  <div class="content">
    <!-- {{content[]}} -->
    <!-- 1->link 2->pic 3->year 4->score 5->name 6->actor  -->
    <div class="item" v-for="(i,index) in content[1]">
      <div class="pic">
        <img  :src="content[2][index]" alt="">
      </div>
      <div class="info">
        <p>简介</p>
        <h3>{{i}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // 原名 content，只因 `Do not use built-in or reserved HTML elements as component id: content`
  name: 'montent',
  data(){
    return {}
  },
  computed:{
    ...mapState({
      'content': state => state.dir.content
    })
  }
}
</script>

<style scoped>
.item{
  width: 12%;
  background-color: #fff;
  display: inline-block;
  margin: 1em;
  outline: 1px solid #ccc;
  cursor: pointer;
}
.item .pic{
  max-height: 80%;
  display:flex;
  align-items:center;
  justify-content:center;
}
.item .info{
  min-height: 20%;
  max-width: 100%;
}
.info h3{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pic img{
  width: 100%;
  height:auto;
}

@media (min-width: 768px){ 
  /* >=768的设备 */
}

@media (min-width: 992px){
  /* >=992的设备 */
}

@media (min-width: 1200){
  /* >=1200的设备 */
}



</style>
