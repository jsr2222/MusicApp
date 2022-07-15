<template>
    <div class="searchViewTop">
        <div class="searchViewTopNav">
            <div class="back" @click="$router.go(-1)">
                <span class="iconfont icon-zuojiantou"></span>
            </div>
            <div class="right">
                <input type="text" v-model="searchKeyword" :placeholder="placeholder" @keydown.enter="saveKeyWord">
            </div>
        </div>
        <div class="history">
            <div class="historyLeft">历史</div>
            <div class="historyRight">
                <div @click="historySearch(item)" class="keywordItem" v-for="(item, i) in keywordList" :key="i">{{ item
                }}</div>
            </div>
            <span class="iconfont icon-qingkongshanchu" @click="clear()"></span>
        </div>
        <div class="searchSongs" v-show="searchSongs.length !== 0">
            <div class="searchSongs-top">
                <div class="top-left">
                    <span class="iconfont icon-24gf-playCircle"></span>
                    <div class="title">播放全部</div>
                    <div class="num">（共{{ searchSongs.length }}首）</div>
                </div>
                <div class="top-right">
                    <span class="iconfont icon-xiazai-wenjianxiazai-07"></span>
                    <span class="iconfont icon-show_duoxuan"></span>
                </div>


            </div>
            <div class="list">
                <div class="playItem" v-for="(item, i) in searchSongs" :key="i">
                    <div class="left">
                        <div class="index">{{ i + 1 }}</div>
                        <div class="content">
                            <div class="title">{{ item.name }}</div>
                            <div class="author">
                                <!-- <span class="tag" v-for="(tag, index) in item.tags" :key="index">{{ tag }}</span> -->
                                <div class="oneauthor" v-for="(author, j) in searchSongs[i].ar" :key="j">
                                    {{ (author.name) }}
                                    <div v-if="!(j + 1 == searchSongs[i].ar.length)">/</div>
                                </div>
                                <div class="book"> - {{ item.al.name }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <span class="iconfont icon-24gl-playCircle" @click="setPlay(item, i)"></span>
                        <span class="iconfont icon-gengduo-shuxiang"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { searchMusic } from '@/api/index.js'
export default {
    data: function () {
        return {
            placeholder: '搜索你喜欢的音乐',
            keywordList: [],
            searchKeyword: '',
            searchSongs: []
        }
    },
    beforeMount() {
        this.keywordList = localStorage.keywordList ? JSON.parse(localStorage.keywordList) : []
    },
    methods: {
        saveKeyWord: async function () {
            this.keywordList.push(this.searchKeyword);
            this.keywordList = Array.from(new Set(this.keywordList));
            // 最多存十个历史记录，超过十个则把最老的记录删除
            if (this.keywordList.length > 10) {
                this.keywordList = this.keywordList.slice(this.keywordList.length - 10, this.keywordList.length);
            }
            localStorage.keywordList = JSON.stringify(this.keywordList);
            let result = await searchMusic(this.searchKeyword);
            this.searchSongs = result.data.result.songs;
            console.log(result);
        },
        clear: function () {
            this.keywordList = [];
            window.localStorage.removeItem('keywordList');
        },
        historySearch: function (keyword) {
            this.searchKeyword = keyword;
            this.saveKeyWord();
        },
        setPlay(item, i) {
            this.$store.commit('pushPlayList', item)
            this.$store.commit('setPlayIndex', this.$store.state.playlist.length-1)
        }
    }
}
</script>

<style lang="less" scoped>
.searchViewTop {
    width: 7.5rem;
    height: calc(100vh - 1.2rem);
    overflow: scroll;

    // margin: 00.3rem 0.3rem;

    .searchViewTopNav {
        background-color: rgb(213, 60, 52);
        padding: 0 0.3rem;
        display: flex;
        width: 100%;
        height: 0.8rem;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;

        .icon-zuojiantou {
            font-size: 0.5rem;
            font-weight: 400;
            color: #fff;
        }

        .right {
            padding: 0 0.2rem;
            // 将剩余的宽度都占据
            flex: 1;

            input {
                background-color: rgb(213, 60, 52);
                border: none;
                outline: none;
                border-bottom: 0.01rem solid rgba(255, 255, 255, 0.5);
                width: 100%;
                height: 0.6rem;
            }

            input::-webkit-input-placeholder {
                color: rgba(255, 255, 255, 0.5);
            }

            input::-moz-placeholder {
                /* Mozilla Firefox 19+ */
                color: rgba(255, 255, 255, 0.5);
            }

            input:-moz-placeholder {
                /* Mozilla Firefox 4 to 18 */
                color: rgba(255, 255, 255, 0.5);
            }

            input:-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                color: rgba(255, 255, 255, 0.5);
            }


        }
    }

    .history {
        display: flex;
        padding: 0.3rem 0.3rem;
        margin-top: 1rem;

        .historyLeft {
            // background-color: pink;
            width: 1rem;
            font-weight: 900;
            font-size: 0.3rem;
            margin: 0.2rem 0rem;
            height: 0.8rem;
        }

        .historyRight {
            color: rgb(125, 125, 125);
            display: flex;
            flex-wrap: wrap;
            flex: 1;

            .keywordItem {
                font-size: 0.2rem;
                background-color: #eee;
                height: 0.5rem;
                line-height: 0.5rem;
                padding: 0rem 0.2rem;
                border-radius: 0.25rem;
                margin: 0.05rem 0.1rem;
            }
        }

        .icon-qingkongshanchu {
            color: rgb(125, 125, 125);
            margin-top: 0.25rem;
        }
    }

    .searchSongs {
        width: 7.5rem;
        padding: 0 0.4rem;
        background-color: #fff;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        position: fixed;
        top: 1.2rem;
        bottom: 1.2rem;
        overflow: scroll;

        .searchSongs-top {
            display: flex;
            justify-content: space-between;
            height: 1rem;
            line-height: 1rem;
            align-items: center;

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

        .list {
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
}
</style>