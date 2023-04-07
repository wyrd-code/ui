import { defineAsyncComponent } from 'vue'

export const WuiButtonGroup = defineAsyncComponent(
  () => import('./WuiButtonGroup.vue')
)
