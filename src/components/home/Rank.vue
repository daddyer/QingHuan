<template>
  <div class="rank">
    <div class="title">排行榜</div>
    <div class="list">

      <div class="type">
        <div class="channl">{{film.channl}}</div>
        <div class="item" v-for="(i,index) in film.title" @click="go(film.channl,index)">
          <div class="name">
            <p><span>{{index + 1 }}.</span> {{i}}</p>
          </div>
          <div class="hot">{{film.hot[index]}}</div>
        </div>
      </div>

      <div class="type">
        <div class="channl">{{tv.channl}}</div>
        <div class="item" v-for="(i,index) in tv.title" @click="go(tv.channl,index)">
          <div class="name">
            <p><span>{{index + 1 }}.</span> {{i}}</p>
          </div>
          <div class="hot">{{tv.hot[index]}}</div>
        </div>
      </div>

      <div class="type">
        <div class="channl">{{variety.channl}}</div>
        <div class="item" v-for="(i,index) in variety.title" @click="go(variety.channl,index)">
          <div class="name">
            <p><span>{{index + 1 }}.</span> {{i}}</p>
          </div>
          <div class="hot">{{variety.hot[index]}}</div>
        </div>
      </div>

      <div class="type">
        <div class="channl">{{animation.channl}}</div>
        <div class="item" v-for="(i,index) in animation.title" @click="go(animation.channl,index)">
          <div class="name">
            <p><p><span>{{index + 1 }}.</span> {{i}}</p>
          </div>
          <div class="hot">{{animation.hot[index]}}</div>
        </div>
      </div>
      <!-- {{tv}}
      {{variety}}
      {{animation}} -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'rank',
  props: ['list'],
  methods:{
    go(channl,index){
      switch (channl) {
        case this.film.channl:
          this.$router.push({ path: `${this.film.link[index]}` })
          break;
        case this.tv.channl:
          this.$router.push({ path: `${this.tv.link[index]}` })
          break;
        case this.variety.channl:
          this.$router.push({ path: `${this.variety.link[index]}` })
          break;      
        default:
          this.$router.push({ path: `${this.animation.link[index]}` })
          break;
      }
    }
  },
  computed:{
    tv(){
      let link = this.list[2].slice(0,10)
      let title = this.list[3].slice(0,10)
      let hot = this.list[4].slice(0,10)
      return {channl: '电视',link:link, title:title, hot:hot}
    },
    variety(){
      let link = this.list[2].slice(10,18)
      let title = this.list[3].slice(10,18)
      let hot = this.list[4].slice(10,18)
      return {channl:'综艺', link:link, title:title, hot:hot}
    },
    film(){
      let link = this.list[2].slice(20,28)
      let title = this.list[3].slice(20,28)
      let hot = this.list[4].slice(20,28)
      return {channl:'电影', link:link, title:title, hot:hot}
    },
    animation(){
      let link = this.list[2].slice(30,39)
      let title = this.list[3].slice(30,39)
      let hot = this.list[4].slice(30,39)
      return {channl:'动漫', link:link, title:title, hot:hot}
    }
  }
}
</script>


<style scoped>
.rank{
  min-height: 200px;
}
.title{
  font-size: 2em;
  color: #2c3e50;
  padding-left: .5em;
  border-left: .2em solid #31c27c;
  border-radius: .1em;
  margin-top: 2em;
  margin-bottom: .5em;
}
.type{
  border-radius: .5em;
  border: 1px solid #ccc;
  margin-top: .5em;
  margin-bottom: 1em;
}
.channl{
  padding: .5em;
  font-size: 1.5em;
  background-color: #ddd;
}
.channl::before{
  content: "📺";
  margin-right: .3em;
}
.item{
  display: flex;
  padding: .2em .5em;
  cursor: pointer;
}
.item:hover{
  background-color: #31c27c;
  color: #222;
}
.name{
  width: 75%;
}
.name p{
  display: block;
  max-width: 95%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hot{
  width: 25%;
}
</style>
