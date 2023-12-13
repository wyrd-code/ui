import { defineAsyncComponent } from 'vue'

export * from './checkbox'

export const WuiCheckbox = defineAsyncComponent(
  () => import('./WuiCheckbox.vue')
)
