import { defineAsyncComponent } from 'vue'

export const WuiBreadcrumbs = defineAsyncComponent(
  () => import('./WuiBreadcrumbs.vue')
)
export const WuiBreadcrumbsAuto = defineAsyncComponent(
  () => import('./WuiBreadcrumbsAuto.vue')
)
