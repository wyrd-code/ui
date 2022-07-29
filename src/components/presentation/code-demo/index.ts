import { defineAsyncComponent } from 'vue'

export const WuiCodeDemo = defineAsyncComponent(
  () => import('./WuiCodeDemo.vue')
)
