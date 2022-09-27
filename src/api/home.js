// 提供首页相关API函数
import request from "@/utils/request";

/**
 * 获取广告图
 * @returns Promise
 */
 export const findBanner = () => {
  return request('/home/banner', 'get')
}

/**
 * 获取机器人列表
 * @returns Promise
 */
 export const findRobot = () => {
  return request('home/robot', 'get')
}

/**
 * 获取图形化列表
 * @returns Promise
 */
 export const findMind = () => {
  return request('home/mind', 'get')
}

/**
 * 获取分类数据
 * @returns Promise
 */
 export const findCategory = () => {
  return request('/home/category', 'get')
}
