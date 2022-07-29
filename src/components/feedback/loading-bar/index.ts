import { defineAsyncComponent } from 'vue'

export const WuiLoadingBar = defineAsyncComponent(
  () => import('./WuiLoadingBar.vue')
)
