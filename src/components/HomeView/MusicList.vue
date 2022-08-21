<template>
    <div class="musicList">
        <div class="musicList-top">
            <div class="title">推荐歌单</div>
            <div class="more">
                <span>更多</span>
                <span class="iconfont icon-gengduo"></span>
            </div>
        </div>
        <div class="mlist">
            <!-- Swiper -->
            <div class="swiper-container" id="musicSwiper">
                <div class="swiper-wrapper">
                    <router-link :to="{path:'/listview',query:{id:item.id}}" class="swiper-slide" v-for="(item, i) in state.musicList" :key="i">
                        <img :src="item.picUrl" :alt="item.name">
                        <div class="title">{{ item.name }}</div>
                        <div class="num">
                            <span class="iconfont icon-xiangyousanjiaoxing"></span>
                            <span>{{ changeValue(item.playCount) }}</span>
                        </div>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>



<script>
import 'swiper/css/swiper.css'  //引入swiper样式
import Swiper from 'swiper';	//引入swiper
import { getMusicList } from '@/api/index.js'
import { reactive, onMounted, onUpdated } from 'vue'


// vue3写法
export default {
    setup() {
        // 响应式
        let state = reactive({ musicList: [] })
        function changeValue(num) {
            let res = num
            if (num >= 100000000) {
                res = (num / 100000000).toFixed(2) + '亿'
            } else if (num >= 10000) {
                res = (num / 10000).toFixed(0) + '万'
            }
            return res
        }
        onMounted(async () => {
            let res = await getMusicList()
            state.musicList = res.data.result
            // console.log(res)
        })
        onUpdated(() => {
            var swiper = new Swiper("#musicSwiper", {
                slidesPerView: 3.25,
                spaceBetween: 11,
            });
        })
        return {
            state, changeValue
        }
    }
}
/*vue2的写法
export default {
    data() {
        return {
            musicList: []
        }
    },
    methods:{
        changeValue:function(num) {
            let res = 0
            if (num >= 100000000) {
                res = (num/100000000).toFixed(2) + '亿'
            } else if (num >= 10000){
                res = (num/10000).toFixed(0) + '万'
            }
            return res
        }
    },
    async mounted() {
        let res = await getMusicList()
        this.musicList = res.data.result
        // console.log(res)

    },
    updated() {
        var swiper = new Swiper("#musicSwiper", {
            slidesPerView: 3.25,
            spaceBetween: 11,
        });
    },
    // 过滤函数

}*/
</script>

<style lang="less" scoped>
.musicList {
    width: 7.5rem;
    padding: 0.1rem 0.3rem 0.3rem 0.3rem;
    height: 4rem;
    background-color: white;
    border-radius: 0.2rem;

    .musicList-top {
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title {
            height: 0.6rem;
            font-size: 0.35rem;
            font-weight: 900;
            line-height: 0.4rem;
        }

        .more {
            font-size: 0.1rem;
            border: 0.01rem solid #ccc;
            padding: 0.06rem 0.17rem;
            border-radius: 0.3rem;
            display: flex;
            justify-content: space-between;
            height: 0.45rem;
            line-height: 0.33rem;

            .icon-gengduo {
                font-size: 0.1rem;
                font-weight: 600;
            }
        }
    }

    .mlist {
        .swiper-container {
            width: 100%;
            height: 3rem;

            .swiper-slide {
                display: flex;
                flex-direction: column;
                position: relative;

                img {
                    width: 100%;
                    height: auto;
                }

                .title {
                    height: 0.6rem;
                    width: 100%;
                    font-size: 0.1rem;
                    overflow: hidden;
                    // 溢出的部分省略号处理
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .num {
                    position: absolute;
                    right: 0.1rem;
                    top: 0.1rem;
                    color: white;
                    height: 0.45rem;
                    padding: 0rem 0.1rem;
                    background-color: rgba(72, 72, 72, 0.5);
                    border-radius: 0.2rem;

                    span {
                        font-size: 0.05rem;
                    }
                }
            }
        }

    }
}
</style>
