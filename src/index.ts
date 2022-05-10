export * from "./components"
export * from "./directives"
export * from "./hooks"
export * from "./models/enums"
export * from "./ui.helpers"

import type { App } from 'vue'

import type { IWui } from '~/ui.types'

import LoadingBar from './components/loading-bar'
import Message from './components/message'
import Notification from './components/notification'

function install(Vue: App): void {
  Vue.config.globalProperties.$Message = Message
  Vue.provide('$Message', Message) 

  Vue.config.globalProperties.$Notification = Notification
  Vue.provide('$Notification', Notification) 


  Vue.config.globalProperties.$LoadingBar = LoadingBar
  Vue.provide('$LoadingBar', LoadingBar) 

  Vue.config.globalProperties.$Equal = {
    drawers: [],
    modals: [],
  } as IWui
}

export default { install }
