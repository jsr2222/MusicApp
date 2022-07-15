<template>
    <section class="aui-flexView">
	<header class="aui-navBar aui-navBar-fixed">
		<a href="javascript:;" class="aui-navBar-item" @click="$router.push('/')">
			<i class="icon icon-return"></i>
		</a>
		<div class="aui-center">
			<span class="aui-center-title"></span>
		</div>
		<a href="javascript:;" class="aui-navBar-item">
			<i class="icon icon-user"></i>
		</a>
	</header>
	<section class="aui-scrollView">
		<div class="aui-chang-box"></div>
		<div class="aui-chang-list">
			<div class="aui-user-img">
				<img style="width:100%;height:100%;"  :src="$store.state.user.userDetail.profile.avatarUrl" alt="">
			</div>
			<div class="aui-user-text">
				<h1>{{$store.state.user.userDetail.profile.nickname}}</h1>
				<span v-if="$store.state.user.userDetail.profile.vipType==0"><i class="icon icon-vip" ></i>您还未开通VIP</span>
				<button>开通会员</button>
			</div>
			<div class="aui-jf">积分50</div>
		</div>
		<div class="aui-palace aui-palace-one">
			<a href="javascript:;" class="aui-palace-grid">
				<div class="aui-palace-grid-icon">
					<img src="../assets/img/nav-001.png" alt="">
				</div>
				<div class="aui-palace-grid-text">
					<h2>客户关系</h2>
				</div>
			</a>
			<a href="javascript:;" class="aui-palace-grid">
				<div class="aui-palace-grid-icon">
					<img src="../assets/img/nav-002.png" alt="">
				</div>
				<div class="aui-palace-grid-text">
					<h2>客户管理</h2>
				</div>
			</a>
			<a href="javascript:;" class="aui-palace-grid">
				<div class="aui-palace-grid-icon">
					<img src="../assets/img/nav-003.png" alt="">
				</div>
				<div class="aui-palace-grid-text">
					<h2>任务监控</h2>
				</div>
			</a>
			<a href="javascript:;" class="aui-palace-grid">
				<div class="aui-palace-grid-icon">
					<img src="../assets/img/nav-004.png" alt="">
				</div>
				<div class="aui-palace-grid-text">
					<h2>数据统计</h2>
				</div>
			</a>
		</div>
		<div class="divHeight"></div>
		<div class="aui-list-item">
			<a href="javascript:;" class="aui-flex b-line">
				<div class="aui-cou-img">
					<img src="../assets/img/icon-001.png" alt="">
				</div>
				<div class="aui-flex-box">
					<p>用户协议</p>
				</div>
			</a>
			<a href="javascript:;" class="aui-flex b-line">
				<div class="aui-cou-img">
					<img src="../assets/img/icon-002.png" alt="">
				</div>
				<div class="aui-flex-box">
					<p>常见问题</p>
				</div>
			</a>
			<a href="javascript:;" class="aui-flex b-line">
				<div class="aui-cou-img">
					<img src="../assets/img/icon-003.png" alt="">
				</div>
				<div class="aui-flex-box">
					<p>联系客服</p>
				</div>
			</a>
			<div class="divHeight b-line"></div>
			<a href="javascript:;" class="aui-flex b-line">
				<div class="aui-cou-img">
					<img src="../assets/img/icon-004.png" alt="">
				</div>
				<div class="aui-flex-box">
					<p>关于我们</p>
				</div>
			</a>
		</div>
		<div class="divHeight b-line"></div>

	</section>
	
</section>
</template>



<style lang="less" scoped>
a {
    text-decoration: none;
    color: #08acee;
}

button {
    outline: 0;
}

img {
    border: 0;
}

button,input,optgroup,select,textarea {
    margin: 0;
    font: inherit;
    color: inherit;
    outline: none;
}

li {
    list-style: none;
}

a {
    color: #666;
}



.divHeight {
    width: 100%;
    height: 10px;
    background: #f5f5f5;
    position: relative;
    overflow: hidden;
}



.b-line {
    position: relative;
}

.b-line:after {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #e2e2e2;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}




.aui-flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 15px;
    position: relative;
}

.aui-flex-box {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    font-size: 14px;
    color: #333;
}


/* 蹇呰甯冨眬鏍峰紡css */

.aui-flexView {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.aui-scrollView {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    position: relative;
}

.aui-navBar {
    height: 44px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 102;
    background: rgb(213, 60, 52);
    
}


.aui-navBar-item {
    height: 44px;
    min-width: 25%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    padding: 0 0.3rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 0.22rem;
    white-space: nowrap;
    overflow: hidden;
    color: #808080;
    position: relative;

}

.aui-navBar-item:first-child {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
    margin-right: -25%;
    font-size: 0.3rem;
    font-weight: bold;
}

.aui-navBar-item:last-child {
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
    -ms-flex-order: 3;
    order: 3;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.aui-center {
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 44px;
    width: 50%;
    margin-left: 25%;
}

.aui-center-title {
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    font-size: 0.3rem;
    color: #333;
}

.icon {
    width: 20px;
    height: 20px;
    display: block;
    border: none;
    float: left;
    background-size: 20px;
    background-repeat: no-repeat;
}

.icon-return{
    background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAB8klEQVRoQ+Xb3U0CQRAH8BkT4HV9gVesQDtQSrACtQOowBboQEuwA7ADrMDnO0hcX0m4MWAgPvBxt3c781+859nb/WX2kpnsHlMCj3POUav1zBcXQxGZUVGM/GIxDVk6hwzSHLPBttsTZr7ZzisinpbLK++9r7oWaPA+7A69Wg1CsgwLPoYlkW9ZLvtnk+GjWCISkXuf529Vt/M6Hi7DJ7FF8eTn89cQLBw4NhYKrIGFAWthIcCaWHOwNtYUbIE1A1thTcCWWBtwrzdhort9hYPULCrKFCOqlZbrdl+Y+dEKq5phBKwaGAWrAkbCRgejYaOCEbHRwKjYKGBkbONgdGyj4BSwjYFTwTYCTglbG5wathb4KJZo5LNsXKZ70Y4J6pacc33udD4PLfYry4Leq4EPWti/A68z4Xq9KRPd7u1tz21Lb8C/x5hTZr62bOirfgZBW3o7SYroWuAUM10bnBq6EXBK6MbAqaAbBaeAbhyMjo4CRkZHA6Oio4IR0dHBaGgVMBJaDYyCVgWXQte4ZVemc1IHn0JvbsqKDPx8PisDqBpjArZEm4Gt0KZgC7Q5WBsNAdZEw4C10FBgDTQcODYaElwG7fP8smrRsY6HBZ9Ch55fQYMPoUXkw+f57setKpmGB/9Bj5n5QYjeqSiGobX2DyFx9Uw9hnP1AAAAAElFTkSuQmCC');

}

.icon-user{
    background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADl0lEQVRoQ+2aXU7bQBDHZxIpeewiJfYrPUHpCYATFE5AOAHhBKUnaHICwgnKDQgngJ4A+mgHieUxQXiqdW0UPmKM/R/jQvwSRfKu57f/mdmvYfpgD1fBa4wx1G6vk8ha8r309zz+L3JJt7en1tpLbXtUgY3v75FIj5lTwEweETkn5hFNp0fWWqsBrwJsOp0NajYPmWi1iNFCdEki+zYMj4u0z2oDBzbdbo8bjUOEoSIysmG4i+gr7QMKjIRNDRSioQ2CPgoaBmyMWaVW64yZDcq4e+i7u017dTVG9IsD9rxjZv6GMOpxH0I0tkGwiegbAuzU5Xb7AmHQoj4kir7ayeTfNFbiwQD7fp+Jfpaw48WmIvLDhuHBiy++8AIG2PNGzLxT1pis9kJ0aoNgo+w3MMC+P2ai9bLGLIHnRqBeClfh0iJHNgx7Zb0I49Ked8DM38sak+nStUpawOXkwmlJZBuxtsYo3OlscLN5oqowaLUFAXagK74vmsDXQQCxFdKJqSKGQZsIDHAF87DzHoTKEGBtd05DpTbAxvPOmfmLZgzXSmGjuDVMB1FEftswzHU2ljXwEJc2nrfFzL80FZY6zcMONM7URH1i/oQEF6I/JNJHLDqcXRCFU0DT7a5xo3EGBQYtOFKboMCJ0tAEhsjM8wLggX1/wER7CJVRW0JdYOC6Woj2bRAMEIOn5tKxWyNWXiI3Mputoq9c4C4dA7vkxTwuk7FR09Bj71ABTqALX7mgTiifCwU14MIZW+TmOgzhtxeqMXw/LxfI2BqZWTVLz3duPiDwq8+r3d2wDYLPyKmoSoUvilyKy3S6gp6O1GO4zAWbRNGunUxGGiqrZWlT4nBe061VgBH7Y41yB/j2MJl7t4joEFEJoAENUziuxWq19pi59B3ufOzGpUxRtF+rkgfT7e5Qo+FOPAqVKeVJTk5tEhmWrQIorHBSxLJDzD1N0MeD4eo9KIpGdjI5yjNQpTcPsZrM7tDOxeqbPSLiKvWOX6t6LoXddo+Y3SmGA1Vb2BcdvTjORQZ5VM8ETtTs562VLGowql2i+oBms+GildoT4DTbEpEDrZ2aeQYnC/wBcKLo4H8FfZLgXJwzH9ggGD5YS8cZt9121a+ly4LyKFD1O3GMz2bbrh6bk4R08l5UXTSYsZuLbLLx/ZP3quxzczhXdbdbtRsv+t4SuC5KaNmxVFhrZOvS71LhuiihZUeu3ZLWx9+i37/KWJhl3Q21iQAAAABJRU5ErkJggg==');

}



.aui-palace {
    padding: 0.15rem 0;
    position: relative;
    overflow: hidden;
}

.aui-palace-grid {
    position: relative;
    float: left;
    padding: 1px;
    width: 20%;
    box-sizing: border-box;
    margin: 5px 0;
}

.aui-palace-grid-icon {
    width: 30px;
    height: 30px;
    margin: 0 auto;
}

.aui-palace-grid-icon img {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
}

.aui-palace-grid-text {
    display: block;
    text-align: center;
    color: #333;
    font-size: 0.3rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-top: 0.06rem;
}

.aui-palace-grid-text h2 {
    font-size: 0.25rem;
    font-weight: normal;
    color: #666666;
}



.aui-chang-box{
    width:100%;
    position:relative;
    background-color:rgb(213, 60, 52);
    // background: -webkit-linear-gradient(#97fac4, #88efab); /* Safari 5.1 - 6.0 */
    // background: -o-linear-gradient(#97fac4, #88efab); /* Opera 11.1 - 12.0 */
    // background: -moz-linear-gradient(#97fac4, #88efab); /* Firefox 3.6 - 15 */
    // background: linear-gradient(#97fac4, #88efab); /* 鏍囧噯鐨勮娉� */
    height:2.5rem;
}

.aui-chang-list{
    width:92%;
    margin:-2rem auto;
    background:#fff;
    border-radius:5px;
    box-shadow:0 3px 15px #e7e7e7;
    position:relative;
    z-index:2;
    padding-bottom:1rem;
}

.aui-chang-list:after{
    content: '';
    position: absolute;
    border-radius:5px;
    z-index: -1px;
    top: 0;
    left: 0;
    width:120px;
    height: 180px;
    background-size:120px;
    background-repeat:no-repeat;
    // background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAAEeCAYAAAA6ttGoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUZEMzI4MjNCREVFMTFFOUIyM0VFRTc5QUZFNURDNTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUZEMzI4MjRCREVFMTFFOUIyM0VFRTc5QUZFNURDNTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRkM5MjQxMkJERUQxMUU5QjIzRUVFNzlBRkU1REM1MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RkQzMjgyMkJERUUxMUU5QjIzRUVFNzlBRkU1REM1MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn7D9+4AAA1tSURBVHja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');
}



.aui-user-img{
    width:50px;
    height:50px;
    position:absolute;
    left:50%;
    margin-left:-25px;
    top:-0.4rem;
    border-radius:100%;
    overflow:hidden;
    box-shadow:0 3px 9px #e7e7e7;
}


.icon-vip{
    background-image:url('data:image/png;base64,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');
}


.aui-user-text{
    padding:1rem 0 0;
    text-align:center;
    position:relative;
    z-index:3;
}

.aui-user-text span{
    width:42%;
    margin:0 auto 0.25rem;
    display:block;
    font-size:0.3rem;
}

.aui-user-text h1{
    color:#333;
    font-size:0.4rem;
    margin-bottom:0.25rem;
}

.aui-user-text span i{
    margin-top:-2px;
}

.aui-user-text button{
    height: 0.7rem;
    line-height: 0.7rem;
    background:none;
    border:1px solid #000;
    font-size:0.3rem;
    font-weight:900;
    color:#000;
    border-radius:22px;
    padding:0.0.3rem 0.15rem;
}


.aui-chang-list .aui-jf{
    background:#ffb710;
    color:#fff;
    font-size:0.3rem;
    font-weight:normal;
    border-radius:22px;
    position:absolute;
    top:0.3rem;
    right:0.3rem;
    padding:0.04rem 0.2rem;
    box-shadow:0 3px 9px #fbe4b0;
}


.aui-palace-one{
    padding-top:2.2rem;
    padding-bottom:0.3rem;
}

.aui-palace-one .aui-palace-grid-icon{
    height:auto;
    width:50px;
}

.aui-palace-one .aui-palace-grid{
    width:25%;
}


.aui-cou-img {
    width: 20px;
    height: 20px;
    margin-right: 0.15rem;
}

.aui-cou-img img {
    width: 20px;
    height: 20px;
    display: block;
    border: none;
}



</style>