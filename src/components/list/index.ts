import { defineAsyncComponent } from 'vue'
export type { WyrdListItem } from './list'

export const WuiList = defineAsyncComponent(() => import('./WuiList.vue'))
export const WuiListItem = defineAsyncComponent(
  () => import('./WuiListItem.vue')
)
export const WuiListItems = defineAsyncComponent(
  () => import('./WuiListItems.vue')
)
