<template>
    <div class="songList">
        <div class="songList-top">
            <div class="recom">
                <span class="iconfont icon-shuaxin"></span>
                <span class="title">为你精选的宝藏歌曲</span>
            </div>
            <div class="play">
                <span class="iconfont icon-right-s"></span>
                <span>播放</span>
            </div>
        </div>
        <div class="slist">
            <!-- Swiper -->
            <div class="swiper-container" id="songSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, i) in state.songGroup" :key="i">
                        <div class="group" v-for="(single, s) in item" :key="s"
                            @click="setPlayIndex(i*3 + s)">
                            <div class="left">
                                <img :src="single.picUrl" :alt="single.name">
                                <div class="infor">
                                    <div class="title">{{ single.name }}</div>
                                    <div class="author">
                                        <span>-</span>
                                        <div class="oneauthor" v-for="(author, j) in single.song.artists" :key="j">
                                            {{ (author.name) }}
                                            <div v-if="!(j + 1 == single.song.artists.length)">/</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <span class="iconfont icon-24gl-playCircle"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import 'swiper/css/swiper.css'  //引入swiper样式
import Swiper from 'swiper';	//引入swiper
import { onMounted, onUpdated, reactive } from 'vue';
import { daySong } from '@/api';
import { useStore } from 'vuex'


export default {
    setup() {
        let state = reactive({ songList: [], songGroup_1: [], songGroup_2: [], songGroup_3: [], songGroup_4: [], songGroup: [] })
        onMounted(() => {
            var swiper = new Swiper("#songSwiper", {
                // slidesPerView: 1,
                spaceBetween: 30,
                paginationClickable: true,
                observer: true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,//修改swiper的父元素时，自动初始化swiper
            });

        })
        onMounted(async () => {
            let song = await daySong(12)
            state.songList = song.data.result
            for (var i = 0; i < 3; i++) {
                state.songGroup_1[i] = state.songList[i];
                state.songGroup_2[i] = state.songList[i + 3];
                state.songGroup_3[i] = state.songList[i + 6];
                state.songGroup_4[i] = state.songList[i + 9];
            }
            state.songGroup[0] = state.songGroup_1;
            state.songGroup[1] = state.songGroup_2;
            state.songGroup[2] = state.songGroup_3;
            state.songGroup[3] = state.songGroup_4;
            // console.log('song!!!!!', state.songList)
            console.log('songGroup1!!!!!', state.songGroup_1)
            // console.log('songGroup2!!!!!', state.songGroup_2)
            // console.log('songGroup3!!!!!', state.songGroup_3)
            // console.log('songGroup!!!!!', state.songGroup)
        })
        const store = useStore();
        const setPlayIndex = function(value){
            let input = state.songList[value]
            console.log(input)
            // store.commit('setSongList', state.songList)
            // store.commit('setPlayIndex', value)
            store.commit('addMusicPlay', input)
        }
        return {
            state, setPlayIndex
        }
    }
}
</script>

<style lang="less" scoped>
.songList {
    width: 7.5rem;
    background-color: #fff;
    margin-top: 0.2rem;
    padding: 0.3rem 0.3rem 0.3rem 0.3rem;
    height: 5rem;
    border-radius: 0.2rem;

    .songList-top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .recom {
            span {
                font-size: 0.4rem;
            }

            .title {
                font-weight: 900;
            }
        }

        .play {
            border: 0.01rem solid #ccc;
            padding: 0.06rem 0.17rem;
            border-radius: 0.3rem;
        }
    }

    .slist {
        .swiper-container {
            width: 100%;
            height: 4rem;

            .swiper-slide {
                display: flex;
                flex-direction: column;
                width: 100%;
                padding-top: 0.3rem;
                height: 1.45rem;

                .group {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 0.3rem;

                    .left {
                        display: flex;
                        justify-content: space-between;

                        img {
                            width: 1rem;
                            height: 1rem;
                            margin-right: 0.2rem;
                        }

                        .infor {
                            width: 5rem;
                            border-bottom: 0.01rem solid rgba(123, 123, 123, 0.5);
                            display: flex;

                            .title {
                                height: 1rem;
                                line-height: 1rem;
                                font-size: 0.4rem;
                                white-space: nowrap;
                                padding-right: 0.2rem;
                            }

                            .author {
                                display: flex;
                                height: 1rem;
                                line-height: 1rem;
                                font-size: 0.1rem;
                                color: rgb(123, 123, 123);
                                white-space: nowrap;
                                overflow: hidden;
                                // 溢出的部分省略号处理
                                // text-overflow: ellipsis;
                                // display: -webkit-box;
                                // -webkit-line-clamp: 2;
                                // -webkit-box-orient: vertical;

                                .oneauthor {
                                    display: flex;
                                }
                            }
                        }
                    }
                }

            }
        }
    }

}
</style>