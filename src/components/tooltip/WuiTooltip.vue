<template>
  <div class="wui-tooltip">
    <span
      ref="trigger"
      class="wui-tooltip-trigger"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <slot />
    </span>

    <transition :name="transition">
      <div
        v-show="show"
        ref="popover"
        class="wui-tooltip-popper"
        :class="[
          placementPopover && `wui-tooltip--${placementPopover.split('-')[0]}`,
        ]"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <div class="wui-tooltip-content">
          <slot name="content">
            {{ content }}
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import { usePopover } from '../../hooks'
import { Positions } from '../../models/enums'

export default defineComponent({
  props: {
    content: {
      type: [String, Number],
      default: null,
    },
    disabled: Boolean,
    hoverable: Boolean,
    placement: {
      type: String,
      default: Positions.T,
      validator: (value: Positions) => Object.values(Positions).includes(value),
    },
    permanent: Boolean,
    autoposition: { type: Boolean, default: true },
  },
  setup(props) {
    const {
      show,
      placement,
      disabled,
      clickable,
      transition,
      visionTimer,
      popover,
      trigger,
      permanent,
      position,
      handleMouseEnter,
      handleMouseLeave,
      hidePopover,
      showPopover,
      setPopoverPosition,
    } = usePopover(props)

    onMounted(() => {
      if (permanent.value) {
        showPopover()
      }
    })

    return {
      show,
      placementPopover: placement,
      disabledPopover: disabled,
      clickable,
      transition,
      visionTimer,
      popover,
      trigger,
      position,
      handleMouseEnter,
      handleMouseLeave,
      hidePopover,
      showPopover,
      setPopoverPosition,
    }
  },
})
</script>

<style lang="css" scoped>
@import url('tooltip.css');
</style>
