import { defineAsyncComponent } from 'vue'

export const WuiCodeDemo = defineAsyncComponent(
  () => import('./WuiCodeDemo.vue')
)

export const WuiCodeDemoRow = defineAsyncComponent(
  () => import('./WuiCodeDemoRow.vue')
)

export const WuiCodeDemoRowLabel = defineAsyncComponent(
  () => import('./WuiCodeDemoRowLabel.vue')
)
