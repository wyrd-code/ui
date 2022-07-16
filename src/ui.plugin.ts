import FloatingVue from 'floating-vue'
import type { App, Ref } from 'vue'

import { FormPlugin } from './components/form'
import { LoadingBar } from './components/loading-bar'
import { Message } from './components/message'
import { Notification } from './components/notification'
import 'floating-vue/dist/style.css'

const floatingTheme = {
  handleResize: true,
  html: true,
  loadingContent: '...',
}

FloatingVue.options.themes.wuipopover = {
  ...floatingTheme,
  placement: 'top',
  triggers: ['click', 'focus', 'touch'],
  delay: {
    show: 150,
    hide: 0,
  },
}

FloatingVue.options.themes.wuitooltip = {
  $extend: 'wuitooltip',
  triggers: ['hover', 'focus'],
  popperTriggers: ['hover', 'focus'],
  delay: {
    show: 0,
    hide: 400,
  },
}

FloatingVue.options.themes.wuidropdown = {
  ...floatingTheme,
  placement: 'bottom',
  triggers: ['click'],
  autoHide: true,
  delay: 0,
}

/**
 * WyrdUI plugin
 *
 * @public
 */
export function install(app: App): void {
  app.use(FloatingVue)
  app.use(FormPlugin, { text: true })

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
