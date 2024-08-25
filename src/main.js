//引入初始化样式文件
import '@/styles/common.scss'
import { useIntersectionObserver } from '@vueuse/core'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//定义全局指令
app.directive('img-lazy', {
    mounted(el, binding) {
        //el: 指令所在元素
        //binding: binding.value 指令等于号后面绑定表达式的值 图片url
        console.log(el, binding.value)
        useIntersectionObserver(
            el,
            ([{ isIntersecting }], ) => {
              console.log(isIntersecting)
              if (isIntersecting) {
                //进入可视区域
                  el.src = binding.value
                  
              }
            },
          )
    }
})