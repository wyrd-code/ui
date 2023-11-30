import { defineAsyncComponent } from 'vue'

export const WuiAccordion = defineAsyncComponent(
  () => import('./WuiAccordion.vue')
)
export const WuiAccordionItem = defineAsyncComponent(
  () => import('./WuiAccordionItem.vue')
)
