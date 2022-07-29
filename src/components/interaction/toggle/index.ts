import { defineAsyncComponent } from 'vue'

export const WuiFormToggle = defineAsyncComponent(
  () => import('./WuiFormToggle.vue')
)
