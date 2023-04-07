import { defineAsyncComponent } from 'vue'

export const WuiMenuDropdown = defineAsyncComponent(
  () => import('./WuiMenuDropdown.vue')
)
