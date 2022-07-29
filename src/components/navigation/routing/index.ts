import { defineAsyncComponent } from 'vue'

export const WuiRouteWrapper = defineAsyncComponent(
  () => import('./WuiRouteWrapper.vue')
)
