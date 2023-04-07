import { defineAsyncComponent } from 'vue'

export const WuiCollapse = defineAsyncComponent(
  () => import('./WuiCollapse.vue')
)
export const WuiCollapseItem = defineAsyncComponent(
  () => import('./WuiCollapseItem.vue')
)
