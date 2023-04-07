import { defineAsyncComponent } from 'vue'

export const WuiSpinnerOverlay = defineAsyncComponent(
  () => import('./WuiSpinnerOverlay.vue')
)
export const WuiSpinner = defineAsyncComponent(() => import('./WuiSpinner.vue'))
