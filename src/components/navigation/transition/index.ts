import { defineAsyncComponent } from 'vue'

export const WuiTransition = defineAsyncComponent(
  () => import('./WuiTransition.vue')
)
export const WuiTransitionPage = defineAsyncComponent(
  () => import('./WuiTransitionPage.vue')
)
