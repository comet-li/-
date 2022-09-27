// 扩展vue原有功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器
// 这就是插件
// vue2.0 插件写法要素：导出一个对象，有install函数，默认传入了vue构造函数，vue 基础之上扩展
// vue3.0 插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app 基础之上扩展

// import XtxSkeleton from './xtx-skeleton.vue'
// import XtxCarousel from './xtx-carousel.vue'
// import XtxMore from './xtx-more.vue'
import defaultImg from '@/assets/images/200.png'
// import XtxBread from './xtx-bread.vue'
// import XtxBreadItem from './xtx-bread-item.vue'

// 使用 require 提供的函数 context 加载某一个目录下的所有 .vue 后缀的文件。
// 然后 context 函数会返回一个导入函数 importFn
// 它又一个属性 keys() 获取所有的文件路径
// 通过文件路径数组，通过遍历数组，再使用 importFn 根据路径导入组件对象
// 遍历的同时进行全局注册即可

// context(目录路径，是否加载子目录，加载文件的匹配正则)
const importFn = require.context('./', false, /\.vue$/)
// console.log(importFn.keys())

export default {
  install (app) {
    // 在app上进行扩展，app提供component directive
    // 如果要挂载原型 app.config.globalProperties 方式
    // app.component(XtxSkeleton.name, XtxSkeleton)
    // app.component(XtxCarousel.name, XtxCarousel)
    // app.component(XtxMore.name, XtxMore)
    // app.component(XtxBread.name, XtxBread)
    // app.component(XtxBreadItem.name, XtxBreadItem)

    // 根据keys批量注册
    importFn.keys().forEach(path => {
      // 导入组件
      const component = importFn(path).default
      // 进行注册
      app.component(component.name, component)
    })

    // 定义指令
    defineDirective(app)
  }
}
 
// 定义指令  图片懒加载指令 v-lazy
const defineDirective = (app) => {
  // 1. 图片懒加载指令 v-lazy
  // 原理：先存储图片地址不能在src上，当图片进入可视区，将你存储图片地址设置给图片元素即可。
  app.directive('lazy', {
    // vue2.0 监听使用指令的DoM是否创建好，钩子函数：inserted
    // vue3.0 的指令拥有的钩子函数和组件的一样，使用指令的DOM是否创建好，钩子函数：mounted
    mounted(el, binding) {
      // console.log('mounted')
      // 2. 创建一个观察对象,来观察当前使用 
      const observe = new IntersectionObserver(([{ isIntersecting  }]) => {
        if(isIntersecting) {
          // 停止观察
          observe.unobserve(el)
          console.log('这是图片懒加载 进入可视区了', el)
          // 3. 把指令的值设置给el的src属性 binding.value就是指令的值
          // 4. 处理图片加载失败 error 图片加载失败的事件 load 图片加载成功
          el.onerror = () => {
            el.src = defaultImg
          }
          el.src = binding.value
        }
      }, {
        threshold: 0.01
      })
      // 开始观察
      observe.observe(el)
    }
  })
}