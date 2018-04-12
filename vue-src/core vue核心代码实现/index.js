//进入vue的实例
import Vue from './instance/index'
//初始化全局api
import { initGlobalAPI } from './global-api/index'
//判断是否是服务器端渲染
import { isServerRendering } from 'core/util/env'

initGlobalAPI(Vue)

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Vue.version = '__VERSION__'

export default Vue
