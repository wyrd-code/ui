import { defineAsyncComponent } from 'vue'

export * from './input'

export const WuiInput = defineAsyncComponent(() => import('./WuiInput.vue'))
export const WuiNumberInput = defineAsyncComponent(() => import('./WuiNumberInput.vue'))
export const WuiPasswordInput = defineAsyncComponent(() => import('./WuiPasswordInput.vue'))
