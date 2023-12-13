import { defineAsyncComponent } from 'vue'

export * from './radio'

export const WuiRadio = defineAsyncComponent(() => import('./WuiRadio.vue'))

export const WuiRadioItem = defineAsyncComponent(
  () => import('./WuiRadioItem.vue')
)
