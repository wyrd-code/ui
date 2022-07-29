import { defineAsyncComponent } from 'vue'

export const WuiPropsTable = defineAsyncComponent(
  () => import('./WuiPropsTable.vue')
)
