import type { App } from 'vue'

import { FormPlugin } from './components/form/form.plugin'
import { LoadingBarPlugin } from './components/loading-bar/loadingBar.plugin'
import { ToastPlugin } from './components/toast/toast.plugin'

// eslint-disable-next-line import/no-unresolved
// import 'uno.css'

// import {
//   // FormPlugin,
//   // WuiLoadingBar,
//   WuiToast,
//   // WuiNotification,
// } from '@/components'

// export const registerComponentConfig = (app: App, config = {}) => {
//   if (!app.config.globalProperties.$wui) {
//     app.config.globalProperties.$wui = {}
//   }

//   Object.assign(app.config.globalProperties.$wui, config)
// }

/**
 * WyrdUI plugin
 *
 * @public
 */
function install(app: App): void {
  app.use(ToastPlugin)
  app.use(LoadingBarPlugin)
  app.use(FormPlugin, { text: true })

  // registerComponentConfig(app, { core: 'working' })
  // app.provide('$WyrdUI', app.config.globalProperties.$wui)
  // registerComponentConfig(app, {
  //   message: WuiToast,
  // })
  // app.config.globalProperties.$wuiToast = WuiToast
  // app.provide('$wuiToast', WuiToast)
}

/**
 * WyrdUI plugin
 *
 * @public
 */
export const WyrdUI = { install }

// function install(app: App): void {
//   registerComponentConfig(app, {
//     notification: WuiNotification,
//   })
//   app.provide('$Notification', WuiNotification)
// }

// // Loading Bar

// function install(app: App): void {
//   registerComponentConfig(app, {
//     loadingBar: WuiLoadingBar,
//   })
//   app.provide('$LoadingBar', WuiLoadingBar)
// }

// // Modal

// function install(app: App): void {
//   registerComponentConfig(app, {
//     modal: {
//       instances: [] as Ref[],
//     },
//   })
// }

// // Drawer

// function install(app: App): void {
//   registerComponentConfig(app, {
//     drawer: {
//       instances: [] as Ref[],
//     },
//   })
// }
