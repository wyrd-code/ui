import { defineAsyncComponent } from 'vue'

export const WuiDropdown = defineAsyncComponent(
  () => import('./WuiDropdown.vue')
)
