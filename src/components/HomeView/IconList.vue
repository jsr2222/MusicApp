<template>
    <div class="iconList">
        <div class="swiper-container" id="iconswiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, i) in IconList" :key="i">
                    <img :src="item.iconUrl" :alt="item.name">
                    <div class="name">{{ item.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'swiper/css/swiper.css'  //引入swiper样式
import Swiper from 'swiper';	//引入swiper
import { getIconList } from '@/api/index.js'
export default {
    data() {
        return {
            IconList: []
        }
    },
    async mounted() {
        let res = await getIconList()
        this.IconList = res.data.data
        // console.log(res)

    },
    updated() {
        var swiper = new Swiper("#iconswiper", {
            slidesPerView: 5.5,
            spaceBetween: 11,
        });
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.iconList {
    .swiper-container {
        width: 100%;
        height: 1.7rem;

        .swiper-slide {
            display: flex;
            flex-direction: column;
            position: relative;
            // 上下居中
            justify-content: center;
            // 左右居中
            align-items: center;

            img {
                width: 75%;
                height: auto;
                background-color: rgba(235, 16, 16, 0.2);
                border-radius: 0.7rem;
            }

            .name {
                padding-top: 0.15rem;
                height: 0.5rem;
                width: 100%;
                font-size: 0.1rem;
                text-align: center;
            }
        }
    }

}
</style>
