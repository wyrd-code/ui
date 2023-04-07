import { defineAsyncComponent } from 'vue'

export * from './progress-bar'

export const WuiProgressBar = defineAsyncComponent(
  () => import('./WuiProgressBar.vue')
)
