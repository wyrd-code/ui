import { defineAsyncComponent } from 'vue'

export type { WyrdNavItem } from './nav'

export const WuiNav = defineAsyncComponent(() => import('./WuiNav.vue'))
export const WuiNavItem = defineAsyncComponent(() => import('./WuiNavItem.vue'))
