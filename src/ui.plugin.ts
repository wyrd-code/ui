/* eslint-disable import/no-named-as-default-member */
import type { App, Ref } from 'vue'

// eslint-disable-next-line import/no-unresolved
// import 'uno.css'

import {
  FormPlugin,
  WuiLoadingBar,
  WuiMessage,
  WuiNotification,
} from './components'

/**
 * WyrdUI plugin
 *
 * @public
 */
function install(app: App): void {
  app.use(FormPlugin, { text: true })

  app.config.globalProperties.$Message = WuiMessage
  app.provide('$Message', WuiMessage)

  app.config.globalProperties.$WuiNotification = WuiNotification
  app.provide('$Notification', WuiNotification)

  app.config.globalProperties.$LoadingBar = WuiLoadingBar
  app.provide('$LoadingBar', WuiLoadingBar)

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
