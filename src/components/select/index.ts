import { defineAsyncComponent } from 'vue'

export * from './select'

export const WuiSelect = defineAsyncComponent(() => import('./WuiSelect.vue'))
