import { defineAsyncComponent } from 'vue'

export const WuiNumberInput = defineAsyncComponent(
  () => import('./WuiNumberInput.vue')
)
