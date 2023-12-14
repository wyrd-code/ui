import arrow from '@popperjs/core/lib/modifiers/arrow'
import flip from '@popperjs/core/lib/modifiers/flip.js'
import offset from '@popperjs/core/lib/modifiers/offset'
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js'
import { createPopper, Instance } from '@popperjs/core/lib/popper-lite.js'
import { toRefs, watch, nextTick, onBeforeUnmount, reactive } from 'vue'

const toInt = (x) => parseInt(x, 10)

export const usePopper = ({
  arrowPadding,
  emit,
  locked,
  offsetDistance,
  offsetSkid,
  placement,
  popperNode,
  triggerNode,
}) => {
  const state = reactive({
    isOpen: false,
    popperInstance: null as unknown as Instance,
  })

  // Enable or disable event listeners to optimize performance.
  const setPopperEventListeners = (enabled) => {
    state.popperInstance?.setOptions((options) => ({
      ...options,
      modifiers: [
        ...(options.modifiers || []),
        { name: 'eventListeners', enabled },
      ],
    }))
  }

  const enablePopperEventListeners = () => setPopperEventListeners(true)
  const disablePopperEventListeners = () => setPopperEventListeners(false)

  const close = () => {
    if (!state.isOpen) {
      return
    }

    state.isOpen = false
    emit('close')
  }

  const open = () => {
    if (state.isOpen) {
      return
    }

    state.isOpen = true
    emit('open')
  }

  // When isOpen or placement change
  watch([() => state.isOpen, placement], async ([isOpen]) => {
    if (isOpen) {
      await initializePopper()
      enablePopperEventListeners()
    } else {
      disablePopperEventListeners()
    }
  })

  const initializePopper = async () => {
    await nextTick()
    state.popperInstance = createPopper(triggerNode.value, popperNode.value, {
      placement: placement.value,
      modifiers: [
        preventOverflow,
        flip,
        {
          name: 'flip',
          enabled: !locked.value,
        },
        arrow,
        {
          name: 'arrow',
          options: {
            padding: toInt(arrowPadding.value),
          },
        },
        offset,
        {
          name: 'offset',
          options: {
            offset: [toInt(offsetSkid.value), toInt(offsetDistance.value)],
          },
        },
      ],
    })

    // Update its position
    state.popperInstance.update()
  }

  onBeforeUnmount(() => {
    state.popperInstance?.destroy()
  })

  return {
    ...toRefs(state),
    open,
    close,
  }
}
