import { defineAsyncComponent } from 'vue'

export const WuiDropArea = defineAsyncComponent(
  () => import('./WuiDropArea.vue')
)
