<template>
  <OnClickOutside @trigger="close">
    <div class="wui-dropdown">
      <slot name="button" class="z-20" :toggle="toggle" />

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div v-if="isOpen" v-bind="$attrs" class="z-30 relative">
          <div class="wui-dropdown-inner" :class="[directionClass, widthClass]">
            <slot
              name="items"
              item-class="wui-dropdown-item"
              item-active-class="bg-neutral-100 dark:(bg-neutral-800)"
              :close="close"
            />
          </div>
        </div>
      </transition>
    </div>
  </OnClickOutside>
</template>

<script lang="ts">
import { OnClickOutside } from '@vueuse/components'
import { defineComponent, ref, computed, toRefs, PropType } from 'vue'

import { DropdownSize } from './constants'

export default defineComponent({
  name: `WuiDropdown`,
  components: {
    OnClickOutside,
  },
  inheritAttrs: false,
  props: {
    size: {
      type: String as PropType<DropdownSize>,
      default: DropdownSize.Auto,
      validator: (val: DropdownSize) =>
        Object.values(DropdownSize).includes(val),
    },
    direction: {
      type: String,
      default: 'left',
    },
  },
  setup(props) {
    const isOpen = ref(false)

    const close = () => (isOpen.value = false)
    const open = () => (isOpen.value = true)
    const toggle = () => (isOpen.value = !isOpen.value)

    const { direction, size } = toRefs(props)
    const directionClass = computed(() =>
      direction.value === 'left'
        ? 'origin-top-left left-0'
        : 'origin-top-right right-0'
    )
    const sizeClasses: Record<DropdownSize, string> = {
      auto: '',
      small: 'w-54',
      medium: 'w-72',
      large: 'w-96',
    }
    const widthClass = computed(() => sizeClasses[size.value])

    return {
      isOpen,
      open,
      close,
      toggle,
      directionClass,
      widthClass,
    }
  },
})
</script>

<style lang="css">
.wui-dropdown {
  @apply relative text-left leading-none;
}
.wui-dropdown-inner {
  @apply bg-white rounded-md shadow-lg ring-black mt-1 ring-1 ring-opacity-5 z-30 absolute focus:outline-none break-normal;
}
html.dark .wui-dropdown-inner {
  @apply bg-neutral-900;
}
.wui-dropdown-item {
  @apply flex items-center space-x-2 px-3 py-3 text-sm leading-tight cursor-pointer;
  @apply border-b border-neutral-200;
  @apply last:(border-none rounded-b-md) first:rounded-t-md hover:(underline);
}
html.dark .wui-dropdown-item {
  @apply border-neutral-700;
}
</style>
