import { defineAsyncComponent } from 'vue'

export const WuiInput = defineAsyncComponent(() => import('./WuiInput.vue'))
export const WuiFormText = defineAsyncComponent(
  () => import('./WuiFormText.vue')
)
