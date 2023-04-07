import { isRef, watch, unref, onMounted, onBeforeUnmount } from 'vue'

export const useEventListener = (target, event, handler) => {
  if (isRef(target)) {
    watch(target, (value, oldValue) => {
      if (oldValue) {
        ;(oldValue as HTMLElement).removeEventListener(event, handler)
      }
      if (value) {
        ;(value as HTMLElement)?.addEventListener(event, handler)
      }
    })
  } else {
    onMounted(() => {
      target.addEventListener(event, handler)
    })
  }

  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(event, handler)
  })
}
