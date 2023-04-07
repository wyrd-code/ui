import { defineAsyncComponent } from 'vue'

export const WuiToast = defineAsyncComponent(() => import('./WuiToast.vue'))

export * from './toast'
export * from './toast.plugin'
export * from './toast.composable'
