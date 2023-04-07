import type { App } from 'vue'

import {
  ToastOptions,
  WUI_TOAST_DURATION_DEFAUT,
  WUI_TOAST_CLOSABLE_DEFAUT,
  WUI_TOAST_PLACEMENT_DEFAULT,
  WUI_TOAST_SYMBOL,
} from './toast'
import { ToastHandler } from './toast.handler'

const defaultOptions: ToastOptions = {
  duration: WUI_TOAST_DURATION_DEFAUT,
  closable: WUI_TOAST_CLOSABLE_DEFAUT,
  placement: WUI_TOAST_PLACEMENT_DEFAULT,
}

let instance: ToastHandler

export const ToastPlugin = {
  install(app: App, options?: ToastOptions) {
    instance = new ToastHandler(app, {
      ...defaultOptions,
      ...options,
    })

    app.provide(WUI_TOAST_SYMBOL, instance)
    app.config.globalProperties.$wuiToast = instance
  },
}
