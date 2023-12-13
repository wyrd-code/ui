import { defineAsyncComponent } from 'vue'

export * from './textarea'

export const WuiTextarea = defineAsyncComponent(
  () => import('./WuiTextarea.vue')
)
