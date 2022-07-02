<template>
  <div class="home">
    <topnav ></topnav>
    <div class="gap"></div>
    <swipercom></swipercom>
  </div>

</template>

<script>
// @ is an alias to /src
import topnav from '@/components/TopNav.vue'
import swipercom from "@/components/Swipercom.vue"
export default {
  name: 'HomeView',
  components: {
    topnav,
    swipercom
  },
  setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
}


</script>

<style lang="less" scoped>
.gap {
  height: 0.4rem;
}
</style>
