<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- <span class="iconfont icon-sousuo"></span> -->
  <router-view></router-view>
  <play-controller></play-controller>
</template>

<script>
import playController from '@/components/PlayController.vue'
export default {
  components: {
    playController,
  },
  mounted() {
    // 把数据解析成对象
    if (localStorage.userData != undefined) {
      let userData = JSON.parse(localStorage.userData)
      this.$store.commit('setUser', userData)
    }

  }
}

</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

a {
  color: #333;
  text-decoration: none;
}
</style>
