import { App } from 'vue'

import { WuiFormConfigSymbol } from './form.constants'
import { defaultFormFieldDefinitions } from './form.definitions'
import type { FormConfiguration } from './form.types'

export const FormPlugin = {
  install(app: App, options: Partial<FormConfiguration> = {}) {
    const definitions = [
      ...defaultFormFieldDefinitions,
      ...(options.definitions || []),
    ]

    const opts: FormConfiguration = {
      definitions,
    }

    const $wuiForm = {
      ...opts,
    }

    for (const definition of definitions) {
      app.component(definition.name, definition.component)
    }

    app.provide(WuiFormConfigSymbol, $wuiForm)

    app.config.globalProperties.$wuiForm = $wuiForm
  },
}
