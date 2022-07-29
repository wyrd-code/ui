import { defineAsyncComponent } from 'vue'

export const WuiLoadMore = defineAsyncComponent(
  () => import('./WuiLoadMore.vue')
)
export const WuiPagination = defineAsyncComponent(
  () => import('./WuiPagination.vue')
)
