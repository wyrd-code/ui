<template>
  <div
    ref="popperContainerNode"
    :style="interactiveStyle"
    @mouseleave="hover && closePopper()"
    @blur="hover && closePopper()"
  >
    <div
      ref="triggerNode"
      @mouseover="hover && openPopper()"
      @click="togglePopper"
      @focus="openPopper"
      @keyup.esc="closePopper"
    >
      <!-- The default slot to trigger the popper  -->
      <slot name="button" :attrs="{ 'aria-haspopup': true }" />
    </div>
    <Transition name="fade">
      <div
        v-show="shouldShowPopper"
        ref="popperNode"
        class="wui-popover"
        @click="!interactive && closePopper()"
        @keyup.esc="!interactive && closePopper()"
      >
        <slot name="content" :close="close" :is-open="modifiedIsOpen">
          {{ content }}
        </slot>
        <span v-if="arrow" class="wui-popover-arrow" data-popper-arrow></span>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { debounce } from 'debounce'
import {
  ref,
  computed,
  useSlots,
  toRefs,
  watch,
  watchEffect,
  onMounted,
  StyleValue,
} from 'vue'

import { usePopper, useContent, useClickAway } from '@/composables'
import { Placement } from '@/domain'

const props = defineProps({
  // Preferred placement (the "auto" placements will choose the side with most space.)
  placement: {
    type: String,
    default: Placement.Auto,
    validator: (value: string) =>
      Object.values(Placement).includes(value as Placement),
  },
  // Disables automatically closing the popover when the user clicks away from it
  disableClickAway: {
    type: Boolean,
    default: false,
  },
  // Offset in pixels along the trigger element
  offsetSkid: {
    type: String,
    default: '0',
  },
  // Offset in pixels away from the trigger element
  offsetDistance: {
    type: String,
    default: '0',
  },
  // Trigger the popper on hover
  hover: {
    type: Boolean,
    default: false,
  },
  // Manually open/close the Popper, other events are ignored if this prop is set
  show: {
    type: Boolean,
    default: null,
  },
  mode: {
    type: String,
    default: 'normal',
    validator: (value: string) =>
      ['normal', 'manual'].includes(value),
  },
  // Disables the Popper. If it was already open, it will be closed.
  disabled: {
    type: Boolean,
    default: false,
  },
  // Open the Popper after a delay (ms).
  openDelay: {
    type: [Number, String],
    default: 0,
  },
  // Close the Popper after a delay (ms).
  closeDelay: {
    type: [Number, String],
    default: 0,
  },
  // Display an arrow on the popper
  arrow: {
    type: Boolean,
    default: false,
  },
  // Stop arrow from reaching the edge of the popper
  arrowPadding: {
    type: String,
    default: '0',
  },
  // If the Popper should be interactive, it will close when clicked/hovered if false
  interactive: {
    type: Boolean,
    default: true,
  },
  // Lock the Popper into place, it will not flip dynamically when it runs out of space if true
  locked: {
    type: Boolean,
    default: false,
  },
  // If the content is just a simple string, it can be passed in as a prop
  content: {
    type: String,
    default: null,
  },
})

const popperContainerNode = ref(null)
const popperNode = ref(null)
const triggerNode = ref(null)
const modifiedIsOpen = ref(false)

onMounted(() => {
  const children = slots.default && slots.default()
  if (children && children.length > 1) {
    return console.error(
      `[WuiPopover]: The <WuiPopover> component expects only one child element at its root. You passed ${children.length} child nodes.`
    )
  }
})

const {
  arrowPadding,
  closeDelay,
  content,
  disableClickAway,
  disabled,
  interactive,
  locked,
  offsetDistance,
  offsetSkid,
  openDelay,
  placement,
  show,
  mode,
} = toRefs(props)

const slots = useSlots()

const emit = defineEmits(['open', 'close', 'mounts'])
emit('mounts')

const { isOpen, open, close } = usePopper({
  arrowPadding,
  emit,
  locked,
  offsetDistance,
  offsetSkid,
  placement,
  popperNode,
  triggerNode,
})

const { hasContent } = useContent(slots, popperNode, content)
const invalid = computed(() => disabled.value || !hasContent.value)
const shouldShowPopper = computed(() => isOpen.value && !invalid.value)
const enableClickAway = computed(
  () => !disableClickAway.value && mode.value !== 'manual'
)
// Add an invisible border to keep the Popper open when hovering from the trigger into it
const interactiveStyle = computed<StyleValue | undefined>(() =>
  interactive.value
    ? `border: ${offsetDistance.value}px solid transparent; margin: -${offsetDistance.value}px;`
    : undefined
)
const openPopperDebounce = debounce(open, openDelay.value)
const closePopperDebounce = debounce(close, closeDelay.value)

const openPopper = async () => {
  if (invalid.value || mode.value === 'manual') {
    return
  }
  closePopperDebounce.clear()
  openPopperDebounce()
}

const closePopper = async () => {
  if (!isOpen.value || mode.value === 'manual') {
    return
  }
  openPopperDebounce.clear()
  closePopperDebounce()
}

const togglePopper = () => {
  isOpen.value ? closePopper() : openPopper()
}

/**
 * If Popper is open, we automatically close it if it becomes
 * disabled or without content.
 */
watch([hasContent, disabled], ([hasContentValue, disabledValue]) => {
  if (isOpen.value && (!hasContentValue || disabledValue)) {
    close()
  }
})

/**
 * In order to eliminate flickering or visibly empty Poppers due to
 * the transition when using the isOpen slot property, we need to return a
 * separate debounced value based on isOpen.
 */
watch(isOpen, (value) => {
  if (value) {
    modifiedIsOpen.value = true
  } else {
    debounce(() => {
      modifiedIsOpen.value = false
    }, 200)
  }
})

/**
 * Watch for manual mode.
 */
watchEffect(() => {
  if (mode.value !== 'manual') {
    show.value ? openPopperDebounce() : closePopperDebounce()
  }
})

/**
 * Use click away if it should be enabled.
 */
watchEffect(() => {
  if (enableClickAway.value) {
    useClickAway(popperContainerNode, closePopper)
  }
})
</script>

<style scoped>
@import url('./popover.css');
</style>
