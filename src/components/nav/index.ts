import { defineAsyncComponent } from 'vue'

export const WuiNav = defineAsyncComponent(() => import('./WuiNav.vue'))
export const WuiNavItem = defineAsyncComponent(() => import('./WuiNavItem.vue'))
