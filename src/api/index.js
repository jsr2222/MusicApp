import axios from 'axios';

let baseUrl = 'http://localhost:3000'


// 获取轮播图的api
// 说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
// type:资源类型,对应以下类型,默认为 0 即 PC
// type: 0: pc 1: android 2: iphone 3: ipad
export function getBanner(type = 2) {
    return axios.get(`${baseUrl}/banner?type=${type}`)
}

// 说明 : 调用此接口 , 可获取 APP 首页圆形图标入口列表
export function getIconList() {
    return axios.get(`${baseUrl}/homepage/dragon/ball`)
}

// 说明 : 调用此接口 , 可获取推荐歌单
// 可选参数 : limit: 取出数量 , 默认为 6 (不支持 offset)
export function getMusicList(limit = 6) {
    return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

// 获取歌单的详情
// 说明 : 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 
// 可以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，
// 但是返回的 trackIds 是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情 (https://github.com/Binaryify/NeteaseCloudMusicApi/issues/452)
//必选参数 : id : 歌单 id
//可选参数 : s : 歌单最近的 s 个收藏者,默认为 8
export function getPlayListDetail(id) {
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}

// 说明 : 调用此接口 , 传入音乐 id 可获得对应音乐的歌词 ( 不需要登录 )
// 必选参数 : id: 音乐 id
// 接口地址 : /lyric
// 调用例子 : /lyric?id=33894312
export function getLyric(id) {
    // console.log('id= ' ,id)
    return axios.get(`${baseUrl}/lyric?id=${id}`)
}

// 搜索歌曲
export function searchMusic(keyword) {
    return axios.get(`${baseUrl}/cloudsearch?keywords=${keyword}`)
}

// 手机登录
// 必选参数 :
// phone: 手机号码
// password: 密码
// 可选参数 :
// countrycode: 国家码，用于国外手机号登录，例如美国传入：1
// md5_password: md5 加密后的密码,传入后 password 参数将失效
// captcha: 验证码,使用 /captcha/sent接口传入手机号获取验证码,调用此接口传入验证码,可使用验证码登录,传入后 password 参数将失效
// 接口地址 : /login/cellphone
// 调用例子 : /login/cellphone?phone=xxx&password=yyy /login/cellphone?phone=xxx&md5_password=yyy /login/cellphone?phone=xxx&captcha=1234
export function phoneLogin(phone, password) {
    return axios.get(`${baseUrl}/login/cellphone?phone=${phone}&password=${password}`)
}

// 获取用户的详情
// 说明 : 登录后调用此接口 , 传入用户 id, 可以获取用户详情
export function userDetail(uid) {
    return axios.get(`${baseUrl}/user/detail?uid=${uid}`)
}

// 获取每日推荐歌曲
// 说明 : 调用此接口 , 可获得每日推荐歌曲 ( 需要登录 )
export function daySong(limit) {
    return axios.get(`${baseUrl}/personalized/newsong?limit=${limit}`)
}

export default {
    getBanner,
    getIconList,
    getMusicList,
    getPlayListDetail,
    getLyric,
    searchMusic,
    phoneLogin,
    userDetail
}