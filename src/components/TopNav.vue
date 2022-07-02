<template>
    <div class="topnav">
        <div class="topLeft">
            <span class="iconfont icon-liebiao"></span>
        </div>
        <div class="topCenter">
            <!-- <span class="navBtn">我的</span>
            <span class="navBtn active">发现</span>
            <span class="navBtn">云村</span>
            <span class="navBtn">视频</span> -->
            <i class="iconfont icon-sousuo"></i>
            <input type="text"  placeholder="搜索你喜欢的音乐">
        </div>
        <div class="topRight">
            <span class="iconfont icon-a-6Ahuatong"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'topnav'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// lang选择了less，所以样式可以用less的形式写
.topnav {
    width: 7.5rem;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem;

    .icon-liebiao {
        font-size: 0.5rem;
        font-weight: 600;
    }

    .icon-a-6Ahuatong {
        font-size: 0.4rem;
        font-weight: 400;
    }

    .topCenter {
        width: 5rem;
        display: flex;
        justify-content: space-around;
        position: relative;

        .active {
            font-weight: 900;
        }

        input {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            outline: 0;
            width: 5rem;
            height: 0.6rem;
            border: 0rem solid #fff;
            border-radius: 0.3rem;
            box-shadow: 0 0 0.1rem 0.03rem rgba(0, 0, 0, 0.1);
            padding-left: 0.65rem;
        }

        /* WebKit browsers */
        input::-webkit-input-placeholder {
            color: #666;
            font-size: 0.25rem;
        }

        /* Mozilla Firefox 4 to 18 */
        input:-moz-placeholder {
            color: #666;
            opacity: 1;
            font-size: 0.25rem;
        }

        /* Mozilla Firefox 19+ */
        input::-moz-placeholder {
            color: #666;
            opacity: 1;
            font-size: 0.25rem;
        }

        /* Internet Explorer 10+ */
        input:-ms-input-placeholder {
            color: #666;
            font-size: 0.25rem;
        }


        .icon-sousuo {
            display: inline-block;
            position: absolute;
            top: 0.17rem;
            left: 0.25rem;
            color: #666;
            font-weight: 600;
        }

    }

}
</style> -->