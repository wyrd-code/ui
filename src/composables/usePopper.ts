import { ref } from 'vue'
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  arrow,
} from '@floating-ui/vue';

export const usePopper = ({
  emit,
  offsetDistance = 0,
  placement,
  popperNode,
  triggerNode,
  arrowNode,
  useArrow = false,
  arrowPadding = 0,
}) => {
  const isOpen = ref(false)

  const close = () => {
    if (!isOpen.value) {
      return
    }

    isOpen.value = false
    emit('close')
  }

  const open = () => {
    if (isOpen.value) {
      return
    }

    isOpen.value = true
    emit('open')
  }

  const middleware = [
    offset(offsetDistance),
    flip(),
    shift(),
  ]

  if (useArrow) {
    middleware.push(arrow({
      element: arrowNode,
      padding: arrowPadding,
    }))
  }

  const {
    update,
    floatingStyles,
    middlewareData,
    placement: activePlacement,
  } = useFloating(triggerNode, popperNode, {
    placement,
    whileElementsMounted: autoUpdate,
    middleware,
    open: isOpen,
  }) as any

  return {
    isOpen,
    open,
    close,
    update,
    floatingStyles,
    middlewareData,
    activePlacement,
  }
}
