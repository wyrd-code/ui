import {
  inject,
} from 'vue'

import {
  WuiFormInstaceSymbol,
} from './form.constants'
import type {
  FormInstance,
} from './form.types'

export const useFormInstance = (): FormInstance => {
  const formInstance = inject<FormInstance>(WuiFormInstaceSymbol)

  if (!formInstance) {
    throw new Error('Missing form instance, cannot inject')
  }

  return formInstance
}
