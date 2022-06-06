<template>
  <label class="wui-switch-wrapper">
    <span
      class="wui-switch"
      :class="[
        `wui-switch--${type}`,
        modelValue && `wui-switch--checked`,
        modelValue && `wui-switch--${type}--checked`,
        disabled && `wui-switch--${type}--disabled`,
        pulse && !disabled && 'animate-pulse',
      ]"
    >
      <input
        type="checkbox"
        class="wui-switch-input"
        :disabled="disabled"
        style="z-index: 10"
        v-bind="$attrs"
        @change="toggle"
      />
      <span class="wui-switch-circle" />
    </span>
    <span class="wui-switch-label-group">
      <span
        v-if="label && !$slots.default"
        class="wui-switch-label"
        :class="[disabled && 'wui-switch-label--disabled']"
        >{{ label }}</span
      >
      <span
        v-if="subLabel && !$slots.sublabel"
        class="wui-switch-label wui-switch-label--sub"
        :class="[disabled && 'wui-switch-label--disabled']"
        >{{ subLabel }}</span
      >

      <span
        v-if="$slots.default"
        class="wui-switch-label"
        :class="[disabled && 'wui-switch-label--disabled']"
        ><slot
      /></span>
      <span
        v-if="$slots.sublabel"
        class="wui-switch-label wui-switch-label--sub"
        :class="[disabled && 'wui-switch-label--disabled']"
        ><slot name="sublabel"
      /></span>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Colors } from '../../models/enums'

export default defineComponent({
  name: 'WuiSwitch',
  inheritAttrs: false,
  props: {
    type: {
      default: Colors.PRIMARY,
      type: String,
      validator: (value: Colors) =>
        [
          Colors.PRIMARY,
          Colors.SUCCESS,
          Colors.DANGER,
          Colors.WARNING,
          Colors.NEUTRAL,
        ].includes(value),
    },
    label: {
      type: String,
      default: null,
    },
    subLabel: {
      type: String,
      default: null,
    },
    pulse: { type: Boolean },
    disabled: { type: Boolean },
    modelValue: { type: Boolean, default: false },
  },
  emits: ['update:model-value'],
  setup(props, { emit }) {
    function toggle() {
      if (props.disabled) {
        return
      }
      const newValue = !props.modelValue
      emit('update:model-value', newValue)
    }

    return { toggle }
  },
})
</script>

<style lang="css" scoped>
@import url('switch.css');
</style>
