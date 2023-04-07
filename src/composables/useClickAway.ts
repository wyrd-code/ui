import { unref } from 'vue'

import { useEventListener } from './useEventListener'

export const useClickAway = (target, handler) => {
  const eventName = 'pointerdown'

  if (typeof window === 'undefined' || !window) {
    return
  }

  const listener = (event: Event) => {
    const el = unref(target)
    if (!el) {
      return
    }

    if (el === event.target || event.composedPath().includes(el)) {
      return
    }

    handler(event)
  }

  return useEventListener(window, eventName, listener)
}
