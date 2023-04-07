import { defineAsyncComponent } from 'vue'

export const WuiFormSelect = defineAsyncComponent(
  () => import('./WuiFormSelect.vue')
)
export const WuiSelect = defineAsyncComponent(() => import('./WuiSelect.vue'))
