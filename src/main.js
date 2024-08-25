//引入初始化样式文件
import '@/styles/common.scss'
//import { useIntersectionObserver } from '@vueuse/core'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入懒加载指令插件并且注册
import {LazyPlugin } from '@/directives'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(LazyPlugin)
app.mount('#app')
 



