import { createStore } from 'vuex'

import user from './modules/user'

// 创建vuex仓库并导出
export default createStore({
  state: {
  // 数据
  },
  getters: {
  // vuex的计算属性
  },
  mutations: {
  // 改数据函数
  },
  actions: {
  // 请求数据函数
  },
  modules: {
  // 分模块
  user
  }
})
