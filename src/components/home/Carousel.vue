<template>
  <div class="carousel">
    <Carousel autoplay v-model="sele" :dots="dots" :autoplay-speed="speed" loop>
      <CarouselItem v-for="(c,index) in carousel[3]" :key="index">
        <div class="cover" @click="go(index)">
          <img :src="carousel[1][index]">
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'appCarousel',
  data(){
    return {
      sele: 0,
      dots: 'inside',
      speed: 3000
    }
  },
  methods:{
    go(index){
      this.$router.push({ path: `${this.carousel[2][index]}` })
    }
  },
  computed:{
    ...mapState({
      'carousel': state => state.home.carousel
    })
  }
}
</script>

<style scoped>
.carousel{
  cursor: pointer;
}
.cover{
  max-height: 250px;
  display:flex;
  align-items:center; 
  justify-content:center;
}
.cover img{
  width:100%;
  height:auto;
}
</style>
