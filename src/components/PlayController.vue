<template>
    <div class="playController">
        <div class="left" @click="show = !show">
            <img :src="playlist[playCurrentIndex].al.picUrl" alt="">
            <div class="content">
                <div class="title">{{ playlist[playCurrentIndex].name }}</div>
                <div class="tips">横滑可以切换上下首哦</div>
            </div>
        </div>
        <div class="right">
            <span v-show="!paused" class="iconfont icon-iconstop" @click="play()"></span>
            <span v-show="paused" class="iconfont icon-24gl-playCircle" @click="play()"></span>
            <span class="iconfont icon-24gf-playlist"></span>
        </div>
        <playMusic @back="show = !show" v-show="show" :playDetail="playlist[playCurrentIndex]" :paused="paused"
            :play="play"></playMusic>
        <audio ref="audio"
            :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import playMusic from '@/components/PlayMusic.vue'
export default {
    data() {
        return {
            paused: true,
            show: false,
            temp: 0,
        };
    },
    computed: {
        ...mapState(["playlist", "playCurrentIndex"])
    },
    mounted() {
        // console.log('[this.$refs.audio] = ',[this.$refs.audio.currentTime]);
        this.temp = this.playCurrentIndex;

    },
    updated() {
        // console.log(this.playlist[this.playCurrentIndex]);
        this.$store.dispatch('reqLyric', { id: this.playlist[this.playCurrentIndex].id });
        if (this.playCurrentIndex != this.temp) {
            this.paused = true;
        }
        this.temp = this.playCurrentIndex;
    },
    methods: {
        play: function () {
            if (this.$refs.audio.paused) {
                this.$refs.audio.play();
                this.paused = false;
                this.UpdateTime();
            }
            else {
                this.$refs.audio.pause();
                this.paused = true;
                clearInterval(this.$store.state.id)
            }
        },
        UpdateTime() {
            this.$store.state.id = setInterval(() => {
                this.$store.commit('setCurrentTime', this.$refs.audio.currentTime)
            }, 1000)
        }
    },
    components: { playMusic }
}
</script>

<style lang="less">
.playController {
    width: 7.5rem;
    height: 1.1rem;
    background-color: white;
    // 给固定定位，让模块一直在底部
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 0.01rem solid #ccc;
    z-index: 999;

    .left {
        display: flex;
        padding: 0 0.24rem;

        img {
            height: 0.7rem;
            width: 0.7rem;
            border-radius: 0.35rem;
        }

        .content {
            padding: 0 0.24rem;

            .tips {
                font-size: 0.2rem;
                color: rgb(123, 123, 123);
            }
        }
    }

    .right {
        padding: 0 0.2rem;

        .icon-24gl-playCircle,
        .icon-iconstop {
            font-size: 0.4rem;
            padding-right: 0.3rem;
        }

        .icon-24gf-playlist {
            font-weight: 900;
        }
    }
}
</style>