<template>
  <label
    :for="id"
    class="wui-radio"
    :class="[isSelected && 'checked', type, disabled && 'disabled']"
  >
    <input
      :id="id"
      class="input"
      :disabled="disabled"
      type="radio"
      :checked="isSelected"
      :value="modelValue"
      v-bind="$attrs"
      tabindex="0"
      @change="onSelect"
    />
    <span class="body">
      <span class="circle-border">
        <span class="circle" />
      </span>
      <span
        v-if="label || $slots.default"
        class="label"
      >
        <slot>{{ label }}</slot>
      </span>
      <span
        v-if="hint || $slots.hint"
        class="hint"
      >
        <slot name="hint">{{ hint }}</slot>
      </span>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useHtmlId } from '@/composables'
import { Colors } from '@/domain'

import { allowedRadioTypes } from './radio'

export default defineComponent({
  name: 'WuiRadio',
  inheritAttrs: false,
  props: {
    modelValue: { type: [String, Number, Boolean, Object], default: null },
    value: { type: [String, Number, Boolean, Object], default: null },
    disabled: { type: Boolean },
    type: {
      default: Colors.PRIMARY,
      type: String,
      validator: (value: Colors) => allowedRadioTypes.includes(value),
    },
    label: { type: String, default: null },
    hint: { type: String, default: null },
    lineThrough: { type: Boolean },
    id: { type: String, default: useHtmlId },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isSelected = computed(() => props.modelValue === props.value)

    function onSelect() {
      if (props.disabled) {
        return
      }
      emit('update:modelValue', props.value)
    }

    return {
      onSelect,
      isSelected,
    }
  },
})
</script>

<style lang="css">
@import url('radio.css');
</style>
