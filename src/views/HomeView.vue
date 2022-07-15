<template>
  <div class="home">
    <img :src="ImgFromBanner" alt="" class="bg">
    <topnav></topnav>
    <div class="gap"></div>
    <swipercom @func="getImgFromBanner"></swipercom>
    <iconList></iconList>
    <div class="link-top"></div>
    <musicList></musicList>
  </div>

</template>

<script>
// @ is an alias to /src
import topnav from '@/components/HomeView/TopNav.vue'
import swipercom from "@/components/HomeView/Swipercom.vue"
import iconList from '@/components/HomeView/IconList.vue'
import musicList from '@/components/HomeView/MusicList.vue'
import { reactive, onMounted, onUpdated } from 'vue'
export default {
  name: 'HomeView',
  components: {
    topnav,
    swipercom,
    iconList,
    musicList
  },
  setup() {
    // let ImgFromBanner = reactive({})
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
  data() {
    return {
      ImgFromBanner:""
    }
  },
  methods: {
    getImgFromBanner(data) {
      this.ImgFromBanner = data
      // console.log(this.ImgFromBanner)
    }
  }
}


</script>

<style lang="less" scoped>
.home {
  // background-color: rgb(241, 238, 238);
      .bg {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        // 让背景图置于底层，以防将其他内容挡住
        z-index: -1;
        // 设置模糊度
        filter: blur(2rem);
    }
}
.gap {
  height: 0.2rem;
}

.link-top {
  width: 100%;
  height: 1px;
  border-top: solid #eaeaeb 1px;
}
</style>
