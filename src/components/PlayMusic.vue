<template>
    <div class="playMusic">
        <div class="bg" :style="{ backgroundImage: `url(${playDetail.al.picUrl})` }"></div>
        <div class="playTop">
            <span class="iconfont icon-zuojiantou" @click="$emit('back')"></span>
            <div class="center">
                <div class="slider">
                    <div class="title">{{ playDetail.name }}</div>
                    <div class="author" v-for="(author, index) in playDetail.ar" :key="index">{{ author.name }}</div>
                </div>
            </div>
            <span class="iconfont icon-fenxiangxiao"></span>
        </div>
        <div class="playContent" v-show="!isLyric" @click="isLyric = !isLyric">
            <img class="needle" :class="{ active: !paused }" src="../assets/img/needle-ab.png" alt="">
            <img class="disc" src="../assets/img/d7e4e3a244701ee85fecb5d4f6b5bd57.png" alt="">
            <img class="discImg" :src="playDetail.al.picUrl" alt="">
        </div>
        <div class="playLyric" v-show="isLyric" @click="isLyric = !isLyric" ref="playLyric">
            <!-- {{$store.state.lyric.toString()}} -->
            <p :class="{ active: (currentTime * 1000 < item.time) && (currentTime * 1000 >= item.pre) }"
                v-for="(item, i) in $store.getters.lyricList" :key="i">
                {{ item.lyric }}
            </p>
        </div>
        <div class="progress"></div>
        <div class="playFooter">
            <span class="iconfont icon-liebiaoxunhuan"></span>
            <span class="iconfont icon-hanhan-01-01" @click="goPlay(-1)"></span>
            <span v-show="paused" class="iconfont icon-24gl-playCircle" @click="play"></span>
            <span v-show="!paused" class="iconfont icon-iconstop" @click="play"></span>
            <span class="iconfont icon-hanhan-01-011" @click="goPlay(1)"></span>
            <span class="iconfont icon-24gf-playlist"></span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: ['playDetail', 'paused', 'play'],
    data: function () {
        return {
            isLyric: false
        }
    },
    computed: {
        ...mapState(['lyric', 'currentTime', 'playlist', 'playCurrentIndex']),

    },
    watch: {
        currentTime: function (newValue) {
            // console.log('newValue', newValue * 1000)
            // console.log([this.$refs.playLyric])
            let p = document.querySelector('p.active')
            if (p) {
                this.$refs.playLyric.scrollTop = p.offsetTop;
                // console.log([p])
            }
        }
    },
    methods: {
        goPlay(num) {
            // console.log(num)
            // console.log(this.playlist)
            // console.log(this.playCurrentIndex)
            let index = this.playCurrentIndex + num
            if (index < 0) {
                index = this.playlist.length - 1;
            } else if (index == this.playlist.length) {
                index = 0;
            }
            this.$store.commit('setPlayIndex', index)
        }
    }
}
</script>

<style lang="less" scoped>
.playMusic {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff;

    .bg {
        z-index: -1;
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-size: auto 100%;
        background-position: center;
        filter: blur(3rem)
    }

    .playTop {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 7.5rem;
        height: 1.2rem;
        position: absolute;
        left: 0;
        top: 0;
        color: #fff;
        padding: 0 0.4rem;
        // z-index: 10;

        .icon-zuojiantou {
            font-size: 0.5rem;
        }

        .center {
            width: 5.5rem;
            padding-top: 0.5rem;
            overflow: hidden;

            @keyframes slide {
                0% {
                    left: 0rem;
                    top: 0rem;
                }

                100% {
                    left: 5rem;
                    top: 0rem;
                }
            }

            @-webkit-keyframes slide

            /* Safari 与 Chrome */
                {
                0% {
                    left: 0rem;
                    top: 0rem;
                }

                100% {
                    left: 5rem;
                    top: 0rem;
                }
            }

            .slider {
                // width: 1.5rem;
                position: relative;
                animation: slide 5s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                /* Safari 与 Chrome: */
                -webkit-animation: slide 5s;
                -webkit-animation-timing-function: linear;
                -webkit-animation-iteration-count: infinite;
            }

            // flex: 1;
            .author {
                font-size: 0.2rem;
                color: #ccc;
            }
        }
    }

    .playContent {
        position: absolute;
        width: 7.5rem;
        height: 10rem;
        left: 0;
        top: 1.3rem;

        .needle {
            width: 2rem;
            height: auto;
            position: absolute;
            left: 50%;
            margin-left: -0.3rem;
            // 设置旋转中心
            transform-origin: 0.3rem 0.3rem;
            transform: rotate(-30deg);
            transition: all 1s;
            z-index: 10;
        }

        .needle.active {
            transform: rotate(3deg);
        }

        .disc {
            width: 6rem;
            height: auto;
            position: absolute;
            left: 50%;
            margin-left: -3rem;
            top: 2rem;
            z-index: 3;
        }

        .discImg {
            width: 3.8rem;
            height: auto;
            position: absolute;
            left: 50%;
            margin-left: -1.9rem;
            top: 3.1rem;
            border-radius: 2.5rem;
        }
    }

    .playLyric {
        position: absolute;
        width: 7.5rem;
        height: 10rem;
        left: 0;
        top: calc(50% - 5rem);
        overflow: scroll;
        text-align: center;
        color: rgb(123, 123, 123);
        padding: 0.2rem 0;

        .active {
            color: #fff;
            font-size: 0.4rem;
        }
    }

    .playFooter {
        width: 7.5rem;
        height: 1.5rem;
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.4rem;
        color: #fff;

        .iconfont {
            font-size: 0.5rem;
        }

        .icon-24gl-playCircle,
        .icon-iconstop {
            font-size: 0.8rem;
        }
    }
}
</style>