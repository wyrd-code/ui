import { defineAsyncComponent } from 'vue'

export const WuiQuickDialog = defineAsyncComponent(
  () => import('./WuiQuickDialog.vue')
)
