import { defineAsyncComponent } from 'vue'

export const WuiList = defineAsyncComponent(() => import('./WuiList.vue'))
export const WuiListItem = defineAsyncComponent(
  () => import('./WuiListItem.vue')
)
export const WuiListItems = defineAsyncComponent(
  () => import('./WuiListItems.vue')
)
