<template>
    <div class="listViewTop" :style="{}">
        <img :src="playlist.coverImgUrl" alt="" class="bg">
        <div class="listViewTopNav">
            <div class="back" @click="$router.go(-1)">
                <span class="iconfont icon-zuojiantou"></span>
                <div class="title">歌单</div>
            </div>
            <div class="right">
                <span class="iconfont icon-sousuo"></span>
                <span class="iconfont icon-gengduo-shuxiang"></span>
            </div>
        </div>
        <div class="content">
            <div class="contentLeft">
                <img :src="playlist.coverImgUrl" alt="">
                <div class="num">
                    <span class="iconfont icon-xiangyousanjiaoxing"></span>
                    <span>{{ changeValue(playlist.playCount) }}</span>
                </div>
            </div>
            <div class="contentRight">
                <div class="title">
                    <span class="name">{{ playlist.name }}</span>
                    <span class="iconfont icon-xialajiantouxiao"></span>
                </div>
                <div class="author">
                    <img :src="playlist.creator.avatarUrl" alt="">
                    <span>{{ playlist.creator.nickname }}</span>
                    <span class="iconfont icon-zengjia"></span>
                </div>
                <div class="description">
                    <div class="desContent">
                        {{ playlist.description }}
                    </div>
                    <span class="iconfont icon-gengduo"></span>
                </div>
            </div>
        </div>
        <div class="iconList">
            <div class="iconItem">
                <span class="iconfont icon-zengjia"></span>
                <span class="multiCount">{{ changeValue(playlist.subscribedCount) }}</span>
            </div>
            <div class="iconItem">
                <span class="iconfont icon-jianyi"></span>
                <span class="multiCount">{{ changeValue(playlist.commentCount) }}</span>

            </div>
            <div class="iconItem">
                <span class="iconfont icon-fenxiangxiao"></span>
                <span class="multiCount">{{ changeValue(playlist.shareCount) }}</span>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['playlist'],
    methods: {
        changeValue: function (num) {
            let res = num
            if (num >= 100000000) {
                res = (num / 100000000).toFixed(2) + '亿'
            } else if (num >= 10000) {
                res = (num / 10000).toFixed(0) + '万'
            }
            return res
        }
    },



}
</script>

<style lang="less" scoped>
.listViewTop {
    width: 7.5rem;
    padding: 0 0.4rem;
    height: 5rem;
    // background-color: skyblue;

    .bg {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        // 让背景图置于底层，以防将其他内容挡住
        z-index: -1;
        // 设置模糊度
        filter: blur(2rem) sepia(20%);
    }

    .listViewTopNav {
        display: flex;
        justify-content: space-between;
        // 上下居中
        align-items: center;
        height: 1.2rem;

        font-size: 0.3rem;
        color: white;
        line-height: 0.7rem;

        .back,
        .right {
            display: flex;
            justify-content: space-between;
        }

        .icon-zuojiantou {
            font-size: 0.5rem;
            padding-right: 0.2rem;
        }

        .icon-gengduo-shuxiang {
            font-size: 0.5rem;
        }

        .icon-sousuo {
            font-size: 0.35rem;
            font-weight: 600;
            padding-right: 0.4rem;
        }

        .title {
            font-weight: 500;
        }
    }

    .content {
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0rem;

        .contentLeft {
            position: relative;

            img {
                width: 2.3rem;
                height: auto;
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

        .contentRight {
            width: 4rem;
            // background-color: red;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .title {
                display: flex;
                justify-content: space-between;
                color: #fff;

                .name {
                    width: 80%;
                    font-size: 0.27rem;
                }

                .icon-xialajiantouxiao {
                    font-size: 0.4rem;
                }
            }


            .author {
                display: flex;
                align-items: center;
                color: rgb(123, 123, 123);
                font-size: 0.2rem;

                img {
                    width: 0.5rem;
                    height: 0.4rem;
                    margin-right: 0.1rem;
                }

                .icon-zengjia {
                    margin-left: 0.1rem;
                    padding: 0rem 0.15rem;
                    color: rgb(210, 210, 210);
                    background-color: rgba(153, 150, 157, 0.5);
                    border-radius: 0.2rem;
                }
            }

            .description {
                display: flex;
                justify-content: space-between;
                font-size: 0.2rem;
                color: rgb(123, 123, 123);

                .desContent {
                    overflow: hidden;
                    // 溢出的部分省略号处理
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                }
            }
        }
    }

    .iconList {
        display: flex;
        justify-content: space-between;
        width: 4.5rem;
        height: 0.7rem;
        //水平居中
        margin: 0.2rem auto;
        padding: 0 0.3rem;
        // background-color: #fff;
        border-radius: 0.4rem;
        box-shadow: 0rem 0rem 0.1rem #4b4b4b;
        z-index: 9;


        .iconItem {
            display: flex;
            align-items: center;
            color: #fff;

            .iconfont {
                margin-right: 0.1rem;

            }

            .icon-zengjia {
                font-size: 0.2rem;
                border: 0.03rem solid #fff;
                border-radius: 0.07rem;
            }

            .icon-jianyi {
                font-size: 0.4rem;
            }

            .multiCount {
                font-size: 0.2rem;
            }

        }
    }
}
</style>