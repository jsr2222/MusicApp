<template>
    <div id="swipercom">
        <div class="swiper-container" id="swiperIndex">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, i) in imgs" :key="i" >
                    <img :src="item.pic" alt="" @click="sendBg(im)" > 
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
import {getBanner} from '@/api/index.js'

var mySwiper
export default {
    name: "Swiper",
    data() {
        return {
            imgs: [
                { pic: require('../../assets/img/swiper1.jpg') },
                { pic: require('../../assets/img/swiper2.jpg') },
                { pic: require('../../assets/img/swiper3.jpg') },
                { pic: require('../../assets/img/swiper4.jpg') },
                { pic: require('../../assets/img/swiper5.jpg') },
                { pic: require('../../assets/img/swiper6.jpg') },
                { pic: require('../../assets/img/swiper3.jpg') },
                { pic: require('../../assets/img/swiper4.jpg') },
            ]
        }
    },
    // watch:{
    //     cnm (n, o){
    //         // console.log(n)
    //     }
    // },
    methods: {
        sendBg(img) {
            this.$emit('func', img)
        },
        addEvent:function(){
            // console.log(mySwiper.activeIndex)
        }
    },
    async mounted() {
        // 接收数据
        var that = this
        let res = getBanner(2)
        this.imgs = (await res).data.banners
        mySwiper = new Swiper('#swiperIndex', {
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
            on:{
                slideChange:function(e){
                    // console.log(that.imgs[this.realIndex].pic)
                    that.$emit('func', that.imgs[this.realIndex].pic)
                    // console.log(this.index)
                }
            }
        });

        // 先输出看一下能不能拿到后端的数据
        // axios.get('http://localhost:3000/banner?type=2').then((res)=> {
        //     console.log(res)
        // })

        
      
    },
    
}

</script>

<style lang="less">
#swipercom {
    width: 7.5rem;
    height: 3rem;
    padding-top: 0.15rem;

    #swiperIndex.swiper-container {
        width: 6.9rem;
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

img {
    border-radius: 0.25rem;
}
</style>
