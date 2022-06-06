<template>
  <div v-clickoutside="hidePopover" class="wui-tooltip">
    <span ref="trigger" class="wui-tooltip-trigger" @click="showPopover">
      <slot />
    </span>

    <transition :name="transition">
      <div
        v-show="show && !disabled"
        ref="popover"
        class="wui-tooltip-popper"
        :class="[placement && `wui-tooltip--${placement}`]"
      >
        <div
          class="wui-tooltip-content"
          :class="{
            'wui-tooltip-content--borderless': borderless,
          }"
        >
          <slot name="content" :close="hidePopover" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { clickOutside } from '../../directives'
import { usePopover } from '../../hooks'
import { Positions } from '../../models/enums'

export default defineComponent({
  name: 'WuiPopover',
  directives: {
    clickoutside: clickOutside,
  },
  props: {
    disabled: Boolean,
    borderless: Boolean,
    placement: {
      type: String,
      default: Positions.T,
      validator: (value: Positions) =>
        [Positions.B, Positions.L, Positions.R, Positions.T].includes(value),
    },
    autoposition: { type: Boolean, default: true },
  },
  setup(props) {
    const {
      show,
      clickable,
      transition,
      popover,
      trigger,
      position,
      hidePopover,
      showPopover,
      setPopoverPosition,
    } = usePopover(props)

    return {
      show,
      clickable,
      transition,
      popover,
      trigger,
      position,
      hidePopover,
      showPopover,
      setPopoverPosition,
    }
  },
})
</script>

<style lang="css" scoped>
@import url('../tooltip/tooltip.css');
</style>
