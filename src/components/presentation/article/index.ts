import { defineAsyncComponent } from 'vue'

export const WuiArticle = defineAsyncComponent(() => import('./WuiArticle.vue'))
export const WuiArticleProseExample = defineAsyncComponent(
  () => import('./WuiArticleProseExample.vue')
)
