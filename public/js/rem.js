function remSize() {
    // 获取设备宽度
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if(deviceWidth >= 750) {
        deviceWidth = 750;
    } else if (deviceWidth <= 320) {
        deviceWidth = 320;
    }
    // 设计稿是 750 px，设置一半的宽度，就是375px 1rem == 100px设计稿宽度，要表达一般的宽度就是3.75rem
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    document.querySelector('body').style.fontSize = 0.3 + 'rem';
}

// 调用函数
remSize();

// 当窗口变化的时候也调用一下函数
window.onresize = function() {
    remSize();
}