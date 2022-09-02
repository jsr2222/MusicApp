<template>
    <div class="starRate">
        <div class="top">请为我们的产品打个分吧~~</div>
        <div class="middle">
            <div v-for="(item, i) in 5" :key="i" class="one iconfont icon-aixin" :class="{ active: i <= starList }"
                @mouseenter="turnRed(i)"></div>
        </div>
        <div class="bottom">当前分值为{{this.starList + 1}}</div>
        <button @click="add()">提交</button>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            starList: -1,
            show : true,
        };
    },
    updated() {

    },
    methods: {
        turnRed: function (i) {
            console.log(i);
            this.starList = i
        },
        add() {
            this.show = false;
            this.$emit('show', this.show);
            // console.log(this.show);
        }
    }
}


</script>

<style lang="less">
.starRate {
    width: 5rem;
    height: 3rem;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 0.4rem;
    // border: 1px solid rgb(123, 123, 123);
    box-shadow: 0rem 0rem 0.3rem 0.1rem #ccc;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    display: flex;
    align-items: center;
    flex-direction: column;

    .top {
        padding-top: 0.3rem;
        font-size: 0.35rem;
    }

    .middle {
        width: 3rem;
        height: 1rem;
        display: flex;
        justify-content: center;

        .icon-aixin {
            font-size: 0.5rem;
        }

        .active {
            color: red;
            fill: red;
        }

    }
}
</style>