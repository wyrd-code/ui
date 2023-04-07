import { defineAsyncComponent } from 'vue'

export const WuiTextarea = defineAsyncComponent(
  () => import('./WuiTextarea.vue')
)
