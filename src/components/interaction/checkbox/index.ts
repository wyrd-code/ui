import { defineAsyncComponent } from 'vue'

export const WuiCheckbox = defineAsyncComponent(
  () => import('./WuiCheckbox.vue')
)
