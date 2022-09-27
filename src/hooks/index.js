// 这是数据懒加载用的函数
// 提供复用逻辑的函数 （钩子）
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
/**
 * 数据懒加载函数
 * @param {Element} target - Don对象
 * @param {Function} apiFn - API函数
 */
export const useLazyData = (apiFn) => {
  const result = ref([])
  const target = ref(null)
    // stop 停止观察
  const { stop } = useIntersectionObserver(
    // 监听的目标元素
    target,
    ([{ isIntersecting }], observerElement) => {
      // isIntersecting 是否进入可视区
      if(isIntersecting) {
        console.log('这是数据懒加载，进入可视区。。。。。。')
        // 马上停止观察
        stop()
        // 并且调用API函数获取数据
        apiFn().then(data => {
          result.value = data.result
        })
      }
    },
    // 配置选项, 相交的比例大于0就触发
    {
      threshold: .1
    }
  )
  return { result, target }
}