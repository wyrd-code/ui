import type { App, Ref } from 'vue'

import { LoadingBar } from './components/loading-bar'
import { Message } from './components/message'
import { Notification } from './components/notification'

/**
 * WyrdUI plugin
 *
 * @public
 */
export function install(app: App): void {
  app.config.globalProperties.$Message = Message
  app.provide('$Message', Message)

  app.config.globalProperties.$Notification = Notification
  app.provide('$Notification', Notification)

  app.config.globalProperties.$LoadingBar = LoadingBar
  app.provide('$LoadingBar', LoadingBar)

  const $WyrdUI = {
    drawers: [] as Ref[],
    modals: [] as Ref[],
  }

  app.config.globalProperties.$WyrdUI = $WyrdUI
  app.provide('$WyrdUI', WyrdUI)
}

/**
 * WyrdUI plugin
 *
 * @public
 */
export const WyrdUI = { install }
