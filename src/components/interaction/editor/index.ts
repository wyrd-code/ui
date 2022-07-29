import { defineAsyncComponent } from 'vue'

export const WuiFormEditor = defineAsyncComponent(
  () => import('./WuiFormEditor.vue')
)
export const WuiFormEditorSimple = defineAsyncComponent(
  () => import('./WuiFormEditorSimple.vue')
)
export const WuiFormEditorMarkdown = defineAsyncComponent(
  () => import('./WuiFormEditorMarkdown.vue')
)
