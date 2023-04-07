import { defineAsyncComponent } from 'vue'

export const WuiTable = defineAsyncComponent(() => import('./WuiTable.vue'))

export const WuiTableCell = defineAsyncComponent(
  () => import('./WuiTableCell.vue')
)
