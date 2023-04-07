import { defineAsyncComponent } from 'vue'

export const WuiLoadMore = defineAsyncComponent(
  () => import('./WuiLoadMore.vue')
)
export const WuiPaging = defineAsyncComponent(() => import('./WuiPaging.vue'))
export const WuiPagingSummary = defineAsyncComponent(
  () => import('./WuiPagingSummary.vue')
)
export const WuiPagingLink = defineAsyncComponent(
  () => import('./WuiPagingLink.vue')
)
export const WuiPagingLinks = defineAsyncComponent(
  () => import('./WuiPagingLinks.vue')
)
export const WuiPagingPrevious = defineAsyncComponent(
  () => import('./WuiPagingPrevious.vue')
)
export const WuiPagingNext = defineAsyncComponent(
  () => import('./WuiPagingNext.vue')
)
export const WuiPagingFirst = defineAsyncComponent(
  () => import('./WuiPagingFirst.vue')
)
export const WuiPagingLast = defineAsyncComponent(
  () => import('./WuiPagingLast.vue')
)
