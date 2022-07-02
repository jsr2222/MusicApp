import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iconfont from '@/assets/iconfont/iconfont.css'

createApp(App).use(store).use(router).use(iconfont).mount('#app')
