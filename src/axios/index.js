/*
 * @Description: 
 * @Author: Zhangwenzhe
 * @Github: KOBE
 * @Date: 2024-12-04 09:38:41
 * @LastEditors: Zhangwenzhe
 */
import * as systemManagement from './systemManagement.js'

const install = function (Vue) {
  if (install.installed) {
    return (install.installed = true)
  }
  Object.defineProperties(Vue.prototype, {
    //  封装应用的文件
    $systemManagement: {
      get () {
        return systemManagement
      }
    },
  })
}
export default {
  install
}