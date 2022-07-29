import { defineAsyncComponent } from 'vue'

export const WuiProgressBar = defineAsyncComponent(
  () => import('./WuiProgressBar.vue')
)
