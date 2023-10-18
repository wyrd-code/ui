import { defineAsyncComponent } from 'vue'

export const WuiForm = defineAsyncComponent(() => import('./WuiForm.vue'))
export const WuiFormReset = defineAsyncComponent(() => import('./WuiFormReset.vue'))
export const WuiFormSubmit = defineAsyncComponent(() => import('./WuiFormSubmit.vue'))
export const WuiFormText = defineAsyncComponent(() => import('./WuiFormText.vue'))
export const WuiFormFieldWrapper = defineAsyncComponent(() => import('./WuiFormFieldWrapper.vue'))

export * from './form.types'
export * from './form.plugin'
