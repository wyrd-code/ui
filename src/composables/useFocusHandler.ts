import { ref, computed } from 'vue'

export const useFocusHandler = <T extends { role?: any; disabled?: boolean }>(
  emit
) => {
  type eventParams = { idx: number; item?: T }

  const setItemRef = (args: eventParams, el?: HTMLElement) => {
    const { idx, item } = args

    if (item?.role !== 'separator' && el) {
      itemRefs.value[idx] = el
    }
  }

  const itemRefs = ref<HTMLElement[]>([])
  const focusedItem = ref<number | null>(null)
  const count = computed(() => itemRefs.value.length)

  const onItemFocused = (args: eventParams) => {
    const { idx } = args
    focusedItem.value = idx
  }

  const focusItem = (args: eventParams) => {
    const { idx } = args
    itemRefs.value[idx]?.focus()
    focusedItem.value = idx
  }

  // const getNextSelectable = () => {
  //   let idx = focusedItem.value
  // }

  const onArrowUp = () => {
    if (focusedItem.value == null) {
      return
    }
    const idx =
      focusedItem.value === 0 ? count.value - 1 : focusedItem.value - 1

    focusItem({ idx })
  }

  const onArrowDown = () => {
    if (focusedItem.value == null) {
      return
    }
    if (focusedItem.value + 1 >= count.value) {
      return focusItem({ idx: 0 })
    }
    focusItem({ idx: focusedItem.value + 1 })
  }

  const onItemBlured = async (args: eventParams) => {
    focusedItem.value = null
    emit('blur')
  }

  const keyHandlers = {
    // 9: handleTab, // tab
    // 16: handleShiftTab, // shift tab
    38: onArrowUp, // arrow up
    40: onArrowDown, // arrow down
  }

  const listeners = {
    keyup: (event) => {
      if (event.keyCode in keyHandlers) {
        keyHandlers[event.keyCode]()
        return false
      }
    },
  }

  return {
    setItemRef,
    onItemBlured,
    onItemFocused,
    listeners,
  }
}
