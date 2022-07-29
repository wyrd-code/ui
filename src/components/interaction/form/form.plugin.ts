import { App } from 'vue'

import { text, checkbox, submit, reset } from './definitions'
import { WuiFormConfigSymbol } from './form.constants'
import type { FormConfiguration } from './form.types'

const defaultOptions: FormConfiguration = {
  definitions: {
    text,
    checkbox,
    submit,
    reset,
  },
}

export const FormPlugin = {
  install(app: App, options: Partial<FormConfiguration> = {}) {
    const opts: FormConfiguration = {
      definitions: {
        ...defaultOptions.definitions,
        ...options.definitions,
      },
    }

    const $wuiForm = {
      ...opts,
    }

    app.provide(WuiFormConfigSymbol, $wuiForm)

    app.config.globalProperties.$wuiForm = $wuiForm
  },
}
