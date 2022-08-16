import {
  createStore
} from 'vuex'
import api from '@/api/index.js'


export default createStore({
  state: {
    playlist: [{
      name: "彩券",
      id: 1486513704,
      al: {
        id: 96680121,
        name: "彩券",
        pic: 109951165386012140,
        picUrl: "http://p3.music.126.net/NP1Zg57UUbHNzAhw7n-LeA==/109951165386012146.jpg",
        pic_str: "109951165386012146",
      }
    }],
    playCurrentIndex: 0,
    lyric: '',
    currentTime: 0,
    intervalId: 0,
    user: {
      isLogin: false,
      account: {},
      userDetail: {}
    }
  },
  getters: {
    lyricList: function (state) {
      let arr = state.lyric.split(/\n/igs).map((item, i, arr) => {
        let min = 0,
          sec = 0,
          mill = 0,
          time = 0;
        let lyric = ''
        if (item) {
          min = parseInt(item.split('[')[1].split(':')[0]);
          sec = parseInt(item.split('[')[1].split(':')[1].split('.')[0]);
          mill = parseInt(item.split(']')[0].split('.')[1]);
          lyric = item.split(']')[1];
          time = mill + sec * 1000 + min * 60 * 1000;
        }


        return {
          min,
          sec,
          mill,
          lyric,
          time
        }
      })
      arr.forEach((item, i) => {
        item.pre = item.time;
        if (i + 1 < arr.length) {
          item.time = arr[i + 1].time
        } else {
          item.time = item.pre + 1000 * 5;
        }
      })
      // console.log(arr)
      return arr
    }
  },
  mutations: {
    setPlayList: function (state, value) {
      state.playlist = value
    },
    pushPlayList: function (state, value) {
      state.playlist.push(value)
    },
    setPlayIndex(state, value) {
      state.playCurrentIndex = value
    },
    setLyric(state, value) {
      state.lyric = value
    },
    setCurrentTime(state, value) {
      state.currentTime = value
      // console.log('value = ', value)
    },
    setUser(state, value) {
      state.user = value
    }
  },
  actions: {
    async reqLyric(content, payload) {
      // console.log('payload: ' + payload)
      let result = await api.getLyric(payload.id)
      content.commit('setLyric', result.data.lrc.lyric)
      // console.log('lyric: ', result.data.lrc.lyric)
    },
    async login(content, payload) {
      // console.log(payload)
      let result = await api.phoneLogin(payload.phone, payload.password)
      // console.log(result)
      if (result.data.code == 200) {
        content.state.user.isLogin = true;
        content.state.user.account = result.data.account
        let userDetail = await api.userDetail(result.data.account.id)
        // console.log('userDetail = ', userDetail)
        content.state.user.userDetail = userDetail.data
        content.commit('setUser', content.state.user)
        // 将用户信息保存到localstorage中
        localStorage.userData = JSON.stringify(content.state.user)
      }
      return result
    }

  },
  modules: {},
})