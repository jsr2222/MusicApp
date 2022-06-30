<template>
  <div class="home">
    <div id="d1"></div>
    <div><i class="iconfont icon-sousuo">111</i></div> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less" scoped>

#d1 {
  width: 3.75rem;
  height: 3.75rem;
  background: skyblue;
}
</style>
