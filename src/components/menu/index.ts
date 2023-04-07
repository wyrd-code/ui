import { defineAsyncComponent } from 'vue'

export const WuiMenu = defineAsyncComponent(() => import('./WuiMenu.vue'))
export const WuiMenuItem = defineAsyncComponent(
  () => import('./WuiMenuItem.vue')
)
