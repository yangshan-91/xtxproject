//引入初始化样式文件
import '@/styles/common.scss'
//import { useIntersectionObserver } from '@vueuse/core'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus';

import App from './App.vue'
import router from './router'

//引入懒加载指令插件并且注册
import {LazyPlugin } from '@/directives'
const app = createApp(App)

//引入全局组件插件
import { componentPlugin } from '@/components'
app.use(createPinia())
app.use(router)
app.use(LazyPlugin)

app.use(ElementPlus);
app.mount('#app')
 
app.use(componentPlugin)


