<template>
  <div class="controller">
    <div class="type" v-if="type[0] != ''">
      <div class="name">类型</div>
      <div class="list">
        <span class="item" v-for="(t,index) in type[2]"
          :class="{'active': index == typeSele}"
          @click="changeType(index)">
          {{t}}
        </span>
      </div>
    </div>
    <div class="years" v-if="years[0] != ''">
      <div class="name">年代</div>
      <div class="list">
        <span class="item" v-for="(y,index) in years[2]"
          :class="{'active': index == yearSele}"
          @click="changeYear(index)">
          {{y}}
        </span>
      </div>
    </div>
    <div class="areas" v-if="areas[0] != ''">
      <div class="name">地区</div>
      <div class="list">
        <span class="item" v-for="(a,index) in areas[2]"
          :class="{'active': index == areaSele}"
          @click="changeArea(index)">
          {{a}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'controller',
  data(){
    return {
      typeSele: 0,
      yearSele: 0,
      areaSele: 0
    }
  },
  methods:{
    changeType(index){
      this.typeSele = index
    },
    changeYear(index){
      this.yearSele = index
    },
    changeArea(index){
      this.areaSele = index
    },
    update(){
      console.log(0)
    }
  },
  computed:{
    ...mapState({
      'type': state => state.dir.type,
      'years': state => state.dir.years,
      'areas': state => state.dir.areas
    })
  }
}
</script>

<style scoped>
.controller{
  border: 1px solid #eee;
  background-color: #fff;
  margin-top: 1.7em;
  margin-bottom: .5em;
}
.type,.years,.areas{
  display: flex;
  align-items: center;
  margin-top: .5em;
  margin-bottom: .5em;
}
.name{
  width: 5%;
  font-size: 1.5em;
  font-weight: 200;
  text-align: center;
}
.item{
  display: inline-block;
  text-align: center;
  width: 3em;
  font-size: 1em;
  margin-right: .5em;
  margin-left: .5em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.active{
  background-color: #31c27c;
  color: #fff;
}
</style>
