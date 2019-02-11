<template>
  <div class="home">
    <Carousel/>
    <div class="content">
      <div class="recommend">
        <FilmRe title="电影" :list="film"/>
        <TvRe title="电视" :list="tv"/>
        <VarietyRe title="综艺" :list="variety"/>
        <AnimationRe title="动漫" :list="animation"/>
      </div>
      <div class="rank-container">
        <Rank :list="rank"/>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex"
import Carousel from '@/components/home/Carousel.vue'
import FilmRe from '@/components/home/FilmRe.vue'
import TvRe from '@/components/home/TvRe.vue'
import VarietyRe from '@/components/home/VarietyRe.vue'
import AnimationRe from '@/components/home/AnimationRe.vue'
import Rank from '@/components/home/Rank.vue'
export default {
  name: 'home',
  components: {
    Carousel,
    FilmRe,
    TvRe,
    VarietyRe,
    AnimationRe,
    Rank
  },
  computed: {
    ...mapState({
      'tv': state => state.home.tv,
      'film': state => state.home.film,
      'variety': state => state.home.variety,
      'animation': state => state.home.animation,
      'rank': state => state.home.rank
    })
  }
}
</script>

<style scoped>
.content{
  max-width: 90%;
  margin: .3em auto;
  display: flex;
}
.recommend{
  width: 85%;
}
.rank-container{
  width: 15%;
}
</style>
