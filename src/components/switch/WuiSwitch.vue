<template>
  <div
    class="wui-switch"
    :class="classNames"
  >
    <label
      :for="id"
      class="wui-switch-label"
    >
      <span
        tabindex="0"
        class="wui-switch-interface"
        role="switch"
        :aria-checked="modelValue"
        :aria-readonly="readonly || disabled"
        @keydown.space.prevent="toggle"
      >
        <input
          :id="id"
          type="checkbox"
          class="wui-switch-input"
          :disabled="disabled"
          style="z-index: 10"
          v-bind="$attrs"
          @change="toggle"
        />
        <span class="wui-switch-circle" />
      </span>

      <span
        v-show="$slots.label || label"
        class="wui-switch-label-text"
      >
        <slot name="label">{{ label }}</slot>
      </span>
    </label>
    <div
      v-if="$slots.hint || hint"
      class="wui-switch-hint"
    >
      <slot name="hint">{{ hint }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useHtmlId } from '@/composables'

import {
  WUI_CHECKBOX_VARIANT_DEFAULT,
  WUI_CHECKBOX_VARIANTS,
  WUI_CHECKBOX_SIZE_DEFAULT,
  WUI_CHECKBOX_SIZES,
} from '../checkbox/checkbox'

export default defineComponent({
  name: 'WuiSwitch',
  inheritAttrs: false,
  props: {
    variant: {
      type: String,
      default: WUI_CHECKBOX_VARIANT_DEFAULT,
      validator: (value: string) => WUI_CHECKBOX_VARIANTS.includes(value),
    },
    size: {
      type: String,
      default: WUI_CHECKBOX_SIZE_DEFAULT,
      validator: (value: string) => WUI_CHECKBOX_SIZES.includes(value),
    },
    pulse: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    modelValue: { type: Boolean, default: false },
    label: { type: String, default: null },
    hint: { type: String, default: null },
    id: { type: String, default: useHtmlId },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    function toggle() {
      if (props.disabled || props.readonly) {
        return
      }
      emit('update:modelValue', !props.modelValue)
    }

    const classNames = computed(() => ({
      'animate-pulse': props.pulse && !props.disabled,
      'wui-switch--checked': props.modelValue,
      'wui-switch--disabled': props.disabled,
      'wui-switch--readonly': props.readonly,
      'wui-switch--pulse': props.pulse,
      [`wui-switch--${props.size}`]: true,
      [`wui-switch--${props.variant}`]: true,
    }))

    return { toggle, classNames }
  },
})
</script>

<style lang="css">
@import url('switch.css');
</style>
