// 提供首页相关API函数
import request from "@/utils/request";

/**
 * 获取机器人列表
 * @returns Promise
 */
 export const findMonikaochangRobot = () => {
  return request('category/1', 'get')
}
