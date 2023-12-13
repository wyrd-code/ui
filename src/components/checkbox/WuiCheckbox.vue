<template>
  <div class="wui-checkbox" :class="classNames">
    <label :for="id" class="wui-checkbox-label">
      <input
        :id="id"
        type="checkbox"
        v-bind="$attrs"
        class="wui-checkbox-input visually-hidden"
        :disabled="disabled"
        :value="true"
        :aria-checked="ariaChecked"
        aria-hidden
      />
      <span
        class="wui-checkbox-icon"
        tabindex="0"
        role="checkbox"
        :aria-checked="ariaChecked"
        :aria-readonly="readonly || disabled"
        @click="toggle"
        @keydown.space.prevent="toggle"
      >
        <slot name="icon">
          <span v-if="modelValue === 'mixed'" class="icon-ph-minus-bold" />
          <span v-else-if="modelValue" class="icon-ph-check-bold" />
          <span v-else class="" />
        </slot>
      </span>
      <span
        v-show="$slots.label || label"
        class="wui-checkbox-label-text"
        @click="toggle"
        @keydown.enter.prevent="toggle"
      >
        <slot name="label">{{ label }}</slot>
      </span>
    </label>
    <div v-if="$slots.help || help" class="wui-checkbox-help">
      <slot name="help">{{ help }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { WUI_CHECKBOX_PROPS } from './checkbox'

export default defineComponent({
  name: 'WuiCheckbox',
  inheritAttrs: false,
  props: WUI_CHECKBOX_PROPS,
  emits: ['update:modelValue'],
  setup(props, { emit }) {

    function toggle() {
      if (props.disabled || props.readonly) {
        return
      }
      const newValue = props.modelValue !== true
      emit('update:modelValue', newValue)
    }

    const ariaChecked = computed(() => {
      // Indeterminate value: 'mixed'
      return !!props.modelValue
    })

    const classNames = computed(() => ({
      'animate-pulse': props.pulse && !props.disabled,
      'wui-checkbox--strike': props.strike && props.modelValue,
      'wui-checkbox--checked': props.modelValue,
      'wui-checkbox--mixed': props.modelValue === 'mixed',
      'wui-checkbox--disabled': props.disabled,
      'wui-checkbox--readonly': props.readonly,
      [`wui-checkbox--${props.size}`]: true,
      [`wui-checkbox--${props.variant}`]: true,
    }))

    return { toggle, classNames, ariaChecked }
  },
})
</script>

<style lang="css">
@import url('checkbox.css');
</style>
