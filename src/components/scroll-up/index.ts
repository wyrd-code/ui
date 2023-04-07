import { defineAsyncComponent } from 'vue'

export const WuiScrollUp = defineAsyncComponent(
  () => import('./WuiScrollUp.vue')
)
