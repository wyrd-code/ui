import { defineAsyncComponent } from 'vue'

export const WuiForm = defineAsyncComponent(() => import('./WuiForm.vue'))
export const WuiFormReset = defineAsyncComponent(() => import('./WuiFormReset.vue'))
export const WuiFormCheckbox = defineAsyncComponent(() => import('./WuiFormCheckbox.vue'))
export const WuiFormRadio = defineAsyncComponent(() => import('./WuiFormRadio.vue'))
export const WuiFormSubmit = defineAsyncComponent(() => import('./WuiFormSubmit.vue'))
export const WuiFormText = defineAsyncComponent(() => import('./WuiFormText.vue'))
export const WuiFormTextarea = defineAsyncComponent(() => import('./WuiFormTextarea.vue'))
export const WuiFormPassword = defineAsyncComponent(() => import('./WuiFormPassword.vue'))
export const WuiFormSelect = defineAsyncComponent(() => import('./WuiFormSelect.vue'))
export const WuiFormNumber = defineAsyncComponent(() => import('./WuiFormNumber.vue'))
export const WuiFormFieldWrapper = defineAsyncComponent(() => import('./WuiFormFieldWrapper.vue'))

export * from './form.types'
export * from './form.plugin'
