import { defineAsyncComponent } from 'vue'

export const WuiCollapsible = defineAsyncComponent(
  () => import('./WuiCollapsible.vue')
)
