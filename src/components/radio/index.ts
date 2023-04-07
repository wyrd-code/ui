import { defineAsyncComponent } from 'vue'

export const WuiRadio = defineAsyncComponent(() => import('./WuiRadio.vue'))

export const WuiRadioGroup = defineAsyncComponent(
  () => import('./WuiRadioGroup.vue')
)
