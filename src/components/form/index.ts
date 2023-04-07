import { defineAsyncComponent } from 'vue'

export const WuiForm = defineAsyncComponent(() => import('./WuiForm.vue'))
export const WuiFormFieldWrapper = defineAsyncComponent(
  () => import('./WuiFormFieldWrapper.vue')
)
export const WuiFormError = defineAsyncComponent(
  () => import('./WuiFormError.vue')
)

export * from './form.types'
export * from './form.plugin'
