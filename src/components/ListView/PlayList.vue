<template>
    <div class="playlist">
        <div class="playlist-top">
            <div class="top">
                <div class="top-left">
                    <span class="iconfont icon-24gf-playCircle"></span>
                    <div class="title">播放全部</div>
                    <div class="num">({{ playlist.tracks.length }})</div>
                </div>
                <div class="top-right">
                    <span class="iconfont icon-xiazai-wenjianxiazai-07"></span>
                    <span class="iconfont icon-show_duoxuan"></span>
                </div>
            </div>
        </div>
        <div class="musicList">
            <div class="playItem" v-for="(item, i) in playlist.tracks" :key="i" @click="setPlayIndex(i)">
                <div class="left">
                    <div class="index">{{ i + 1 }}</div>
                    <div class="content">
                        <div class="title">{{ item.name }}</div>
                        <div class="author">
                            <!-- <span class="tag" v-for="(tag, index) in item.tags" :key="index">{{ tag }}</span> -->
                            <div  class="oneauthor" v-for="(author, j) in playlist.tracks[i].ar" :key="j">
                                {{ (author.name) }}
                                <div v-if="!(j + 1 == playlist.tracks[i].ar.length)">/</div>
                            </div>   
                            <div class="book"> - {{ item.al.name }}</div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <span class="iconfont icon-24gl-playCircle" ></span>
                    <span class="iconfont icon-gengduo-shuxiang"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import {mixins} from '../../mixin/index.js'
export default {
    props: ['playlist'],
    mixinss:[mixins],
    methods: {
        ...mapMutations(['setPlayIndex'])
    },

}
</script>

<style lang="less" scoped>
.playlist {
    width: 7.5rem;
    margin-top: 0.4rem;
    padding: 0.4rem;
    background-color: #fff;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;

    .playlist-top {
        .top {
            display: flex;
            justify-content: space-between;
            height: 0.8rem;
            // background-color: pink;
            // 上下居中
            // align-items: center;
            line-height: 0.8rem;
            margin-bottom: 0.3rem;

            .top-left {
                display: flex;

                .icon-24gf-playCircle {
                    color: rgb(199, 10, 10);
                    font-size: 0.4rem;
                    margin-right: 0.2rem;
                }

                .title {
                    font-weight: 900;
                    margin-right: 0.1rem;
                }

                .num {
                    font-size: 0.2rem;
                    color: rgb(123, 123, 123);

                }
            }

            .top-right {
                display: flex;
                justify-content: space-between;

                .icon-xiazai-wenjianxiazai-07 {
                    font-weight: 600;
                    font-size: 0.35rem;
                }

                .icon-show_duoxuan {
                    font-weight: 550;
                    font-size: 0.35rem;
                    margin-left: 0.2rem;
                }
            }
        }

    }

    .musicList {
        .playItem {
            display: flex;
            justify-content: space-between;
            height: 0.8rem;
            margin-bottom: 0.3rem;

            .left {
                display: flex;
                justify-content: space-between;
                // background-color: pink;
                // width: 5.5rem;

                .index {
                    width: 0.6rem;
                    line-height: 0.8rem;
                }

                .content {
                    width: 5rem;
                    
                    .title {
                        font-size: 0.27rem;
                    }

                    .author {
                        display: flex;
                        // justify-content: flex-start;
                        font-size: 0.1rem;
                        color: rgb(123, 123, 123);
                        .oneauthor {
                            display: flex;
                        }

                        .book {
                            margin-left: 0.1rem;
                        }
                    }

                }


            }

            .right {
                line-height: 0.8rem;
                color: rgb(123, 123, 123);

                .icon-gengduo-shuxiang {
                    margin-left: 0.3rem;
                }
            }
        }
    }
}
</style>