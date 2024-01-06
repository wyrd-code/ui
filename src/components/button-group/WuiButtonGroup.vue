<template>
  <div
    class="wui-btn-group"
    :class="[
      vertical ? 'wui-btn-group--vertical' : 'wui-btn-group--horizontal',
      stretch ? `wui-btn-group-stretch--${stretch}` : '',
      condensed ? 'wui-btn-group--condensed' : 'wui-btn-group--separated',
    ]"
    role="group"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup name="WuiButtonGroup">
import {
  WUI_BUTTON_SIZES,
  WUI_BUTTON_SIZE_DEFAULT,
  WUI_BUTTON_VARIANTS,
  WUI_BUTTON_SHAPE_DEFAULT,
  WUI_BUTTON_VARIANT_DEFAULT,
  WUI_BUTTON_SHAPES,
} from '@/components/button/button'

defineProps({
  vertical: {
    type: Boolean,
  },
  condensed: {
    type: Boolean,
  },
  stretch: {
    type: String,
    default: null,
    validator: (value: string) => ['full', 'wide'].includes(value),
  },
  // Reused button props that will be passed down to buttons
  variant: {
    type: String,
    default: WUI_BUTTON_VARIANT_DEFAULT,
    validator: (value: string) => WUI_BUTTON_VARIANTS.includes(value),
  },
  size: {
    type: String,
    default: WUI_BUTTON_SIZE_DEFAULT,
    validator: (value: string) => WUI_BUTTON_SIZES.includes(value),
  },
  shape: {
    type: String,
    default: WUI_BUTTON_SHAPE_DEFAULT,
    validator: (value: string) => WUI_BUTTON_SHAPES.includes(value),
  },
})
</script>

<style lang="css">
@import url('button-group.css');
</style>
