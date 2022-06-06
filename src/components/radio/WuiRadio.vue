<template>
  <label
    class="wui-radio-wrapper"
    :class="[
      isChecked && `wui-radio-wrapper--${type}--checked`,
      `wui-radio-wrapper--${type}`,
      disabled && 'wui-radio-wrapper--disabled',
    ]"
  >
    <input
      class="wui-radio-input"
      :disabled="disabled"
      type="radio"
      :checked="isChecked"
      :value="modelValue"
      v-bind="$attrs"
      @change="check"
    />
    <span :class="['wui-radio-border', pulse && !disabled && 'pulse']">
      <span class="wui-radio-circle" />
    </span>
    <span class="wui-radio-label-group">
      <span
        v-if="label && !$slots.default"
        class="wui-radio-label"
        :class="[disabled && 'wui-radio-label--disabled']"
        >{{ label }}</span
      >
      <span
        v-if="subLabel && !$slots.sublabel"
        class="wui-radio-label wui-radio-label--sub"
        :class="[disabled && 'wui-radio-label--disabled']"
        >{{ subLabel }}</span
      >

      <span
        v-if="$slots.default"
        class="wui-radio-label"
        :class="[disabled && 'wui-radio-label--disabled']"
      >
        <slot />
      </span>
      <span
        v-if="$slots.sublabel"
        class="wui-radio-label wui-radio-label--sub"
        :class="[disabled && 'wui-radio-label--disabled']"
      >
        <slot name="sublabel" />
      </span>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { Colors } from '../../models/enums'
import { allowedRadioTypes } from './model'

export default defineComponent({
  name: 'WuiRadio',
  inheritAttrs: false,
  props: {
    type: {
      default: Colors.PRIMARY,
      type: String,
      validator: (value: Colors) => allowedRadioTypes.includes(value),
    },
    label: {
      type: String,
      default: null,
    },
    subLabel: { type: String, default: null },
    pulse: { type: Boolean },
    disabled: { type: Boolean },
    lineThrough: { type: Boolean },
    modelValue: { type: [String, Number, Boolean, Object], default: null },
    value: {
      type: [String, Number, Boolean],
      required: true,
    },
  },
  emits: ['update:model-value'],
  setup(props, { emit }) {
    const isChecked = computed(() => props.modelValue === props.value)

    function check() {
      if (props.disabled) {
        return
      }
      emit('update:model-value', props.value)
    }

    return {
      check,
      isChecked,
    }
  },
})
</script>

<style lang="css" scoped>
@import url('radio.css');
</style>
