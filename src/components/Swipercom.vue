<template>
    <div id="swipercom">
        <div class="swiper-container" id="swiperIndex">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, i) in imgs" :key="i">
                    <img :src="item.pic" alt="">
                </div>
            </div>
            <!-- //换页器 -->
            <div class="swiper-pagination"> </div>
            <!-- //前进后退 -->
            <!-- <div class="swiper-button-next"></div> -->
            <!-- <div class="swiper-button-prev"></div> -->
            <!-- //滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
    </div>
</template>

<script>
import 'swiper/css/swiper.css'  //引入swiper样式
import Swiper from 'swiper';	//引入swiper
export default {
    name: "Swiper",
    data() {
        return {
            imgs: [
                { pic: require('../assets/img/swiper1.jpg') },
                { pic: require('../assets/img/swiper2.jpg') },
                { pic: require('../assets/img/swiper3.jpg') },
                { pic: require('../assets/img/swiper4.jpg') },
                { pic: require('../assets/img/swiper5.jpg') },
                { pic: require('../assets/img/swiper6.jpg') },
            ]
        }
    },
    mounted() {
        var mySwiper = new Swiper('#swiperIndex', {
            //配置分页器内容

            loop: true, // 循环模式选项
            speed: 300, //速度
            // freeMode: true, //根据惯性滑动可能不止一格且不会贴合
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            autoplay: true, //自动切换
            spaceBetween: 20,//间距20px
            // 分页器
            pagination: {
                el: ".swiper-pagination",//换页器与哪个标签关联
                clickable: true,//分页器是否可以点击
                //修改分页器样式
                bulletClass: 'swiper-pagination-bullet',
                //激活样式
                bulletActiveClass: 'my-bullet-active',
            },

            // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
            //如果需要滚动条
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        })
    }
}
</script>

<style lang="less">
#swipercom {
    width: 7.5rem;
    height: 3rem;

    #swiperIndex.swiper-container {
        width: 7.1rem;
        height: 2.7rem;
        border-radius: 0.25rem;

        .swiper-slide img {
            width: 100%;
        }

        .my-bullet-active {
            background: #ffffff;
            opacity: 1;
        }

        .swiper-pagination-bullet {
            width: 0.2rem;
            height: 0.05rem;
            border-radius: 0.025rem;
            background: #c0c0c0;
        }
    }
}
</style>
