import { useIntersectionObserver } from '@vueuse/core'
export const LazyPlugin = {
  install(app) {
    //定义全局指令
  app.directive('img-lazy', {
    mounted(el, binding) {
        //el: 指令所在元素
        //binding: binding.value 指令等于号后面绑定表达式的值 图片url
        console.log(el, binding.value)
       const { stop } = useIntersectionObserver(
            el,
            ([{ isIntersecting }], ) => {
              console.log(isIntersecting)
              if (isIntersecting) {
                //进入可视区域
                  el.src = binding.value
                  stop()
              }
            },
          )
    }
})
  }
}
