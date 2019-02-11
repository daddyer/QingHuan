<template>
  <div class="player">
    {{id}}
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
  mounted(){
    // console.log(this.$api)
    this.id = `${this.$route.params.channl}/${this.$route.params.id }`
    this.$api.get_cover_data(`${this.$route.params.channl}/${this.$route.params.id }`)
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
