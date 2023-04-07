import { defineAsyncComponent } from 'vue'

export const WuiAvatarGroup = defineAsyncComponent(
  () => import('./WuiAvatarGroup.vue')
)
