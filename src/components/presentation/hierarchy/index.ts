import { defineAsyncComponent } from 'vue'

export const WuiHierarchy = defineAsyncComponent(
  () => import('./WuiHierarchy.vue')
)
export const WuiHierarchyNode = defineAsyncComponent(
  () => import('./WuiHierarchyNode.vue')
)
