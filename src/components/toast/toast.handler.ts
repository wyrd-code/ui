import type { App } from 'vue'

import { mount } from '@/helpers'

import type { ToastOptions } from './toast'
import WuiToast from './WuiToast.vue'

export class ToastHandler {
  constructor(
    private readonly app: App,
    private readonly globalOptions: ToastOptions
  ) {}

  show(options: ToastOptions) {
    const propsData: Record<string, unknown> = {
      ...this.globalOptions,
      ...options,
    }

    mount(WuiToast, {
      props: propsData,
      app: this.app,
    })
  }

  neutral(options?: ToastOptions) {
    return this.show({ ...options, variant: 'neutral' })
  }

  info(options?: ToastOptions) {
    return this.show({ ...options, variant: 'info' })
  }

  success(options?: ToastOptions) {
    return this.show({ ...options, variant: 'success' })
  }

  danger(options?: ToastOptions) {
    return this.show({ ...options, variant: 'danger' })
  }

  warning(options?: ToastOptions) {
    return this.show({ ...options, variant: 'warning' })
  }
}
