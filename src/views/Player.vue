<template>
  <div class="player">
    {{info}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'palyer',
  data(){
    return {
      time: 0
    }
  },
  created(){
    // console.log(Cover)
    // this.$api.get_cover_data(`${this.$route.params.channl}/${this.$route.params.id }`)
  },
  computed:{
    ...mapState({
      'info': state => state.player.info,
      'pages': state => state.player.pages,
      'video': state => state.player.video
    })
  }
}
</script>

<style scoped>
.player{
  max-width: 90%;
  margin: 0 auto;
}
</style>