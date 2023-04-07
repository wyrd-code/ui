import { defineAsyncComponent } from 'vue'

export const WuiCodeExample = defineAsyncComponent(
  () => import('./WuiCodeExample.vue')
)
