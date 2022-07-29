<template>
  <label
    class="wui-checkbox-wrapper"
    :class="{
      'animate-pulse': pulse && !disabled,
    }"
  >
    <span class="wui-checkbox-check-wrapper">
      <input
        type="checkbox"
        v-bind="$attrs"
        class="wui-checkbox-input"
        :disabled="disabled"
        :value="true"
        :checked="modelValue"
        @input="toggle"
      />
      <span
        class="wui-checkbox"
        :class="[
          `wui-checkbox--${type}`,
          modelValue && `wui-checkbox--${type}--checked wui-checkbox-checked`,
          disabled && 'wui-checkbox--disabled',
        ]"
      >
        <span v-if="modelValue" class="wui-check-icon icon-ph-check-bold" />
      </span>
    </span>
    <span class="wui-checkbox-label-group">
      <span
        v-if="$slots.default || label"
        class="wui-checkbox-label"
        :class="[
          lineThrough && modelValue && 'wui-checkbox-label--linethrough',
          disabled && 'wui-checkbox-label--disabled',
        ]"
      >
        <slot>{{ label }}</slot>
      </span>
      <span
        v-if="$slots.sublabel || subLabel"
        class="wui-checkbox-label wui-checkbox-label--sub"
        :class="[disabled && 'wui-checkbox-label--disabled']"
      >
        <slot name="sublabel">{{ subLabel }}</slot>
      </span>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Colors } from '@/core'

export default defineComponent({
  name: 'WuiCheckbox',
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
          Colors.BLACK,
          Colors.NEUTRAL,
        ].includes(value),
    },
    label: {
      type: String,
      default: null,
    },
    subLabel: { type: String, default: null },
    pulse: { type: Boolean },
    disabled: { type: Boolean },
    lineThrough: { type: Boolean },
    color: { type: String, default: null },
    modelValue: {
      type: Boolean,
    },
  },
  emits: ['update:model-value'],
  setup(props, { emit }) {
    function toggle() {
      if (props.disabled) {
        return
      }
      const newValue = props.modelValue ? false : true
      emit('update:model-value', newValue)
    }

    return { toggle }
  },
})
</script>

<style lang="css" scoped>
@import url('checkbox.css');
</style>
