import { defineAsyncComponent } from 'vue'

export const WuiNotification = defineAsyncComponent(
  () => import('./WuiNotification.vue')
)
