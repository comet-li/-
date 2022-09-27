import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入自己的UI组件库
import UI from '@/components/library'

// 重置样式的包
import 'normalize.css'
// 导入公共样式
import '@/assets/styles/common.less'

// vuex的计算属性
createApp(App).use(store).use(router).use(UI).mount('#app')
