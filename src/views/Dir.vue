<template>
  <div class="dir">
    <!-- {{ $route.params.channl }} -->
    <Controller/>
    <Montent/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Controller from '@/components/dir/Controller'
import Montent from '@/components/dir/Montent'
export default {
  name: 'dir',
  data(){
    return {}
  },
  components:{
    Controller,
    Montent
  },
  computed:{
    ...mapState({

    })
  }
}
</script>

<style scoped>
.dir{
  max-width: 85%;
  margin: 0 auto;
}
</style>