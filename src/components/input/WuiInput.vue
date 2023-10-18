<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <transition name="fade">
      <div v-show="focus && mask" class="wui-input-mask" />
    </transition>
    <span v-if="labelTop" class="wui-input-label">{{ labelTop }}</span>
    <div class="wui-input-prefix-wrapper" :class="{ masked: mask }">
      <div v-if="prefix" class="wui-input-prefix">
        {{ prefix }}
      </div>
      <div
        class="wui-input-wrapper"
        :class="[
          status && `wui-input-wrapper--${status}`,
          disabled && `wui-input-wrapper--disabled`,
        ]"
      >
        <span v-if="$slots.prefixIcon" class="wui-input-icon-wrapper">
          <span class="wui-input-icon" :name="prefixIcon">
            <slot name="prefixIcon" />
          </span>
        </span>
        <input
          :id="id"
          :type="type"
          :name="name"
          class="wui-input"
          :disabled="disabled"
          :value="modelValue"
          :placeholder="placeholder"
          @change="input"
          @focus="focus = true"
          @blur="focus = false"
        />
        <span v-if="$slots.suffixIcon" class="wui-input-icon-wrapper">
          <span class="wui-input-icon" :name="suffixIcon">
            <slot name="suffixIcon" />
          </span>
        </span>
      </div>
      <div v-if="suffix" class="wui-input-suffix">
        {{ suffix }}
      </div>
    </div>
    <transition name="fade-bottom">
      <span
        v-if="message"
        class="wui-input-message"
        :class="[
          status && `wui-input-message--${status}`,
          disabled && `wui-input-message--disabled`,
        ]"
        >{{ message }}</span
      >
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import {
  WUI_INPUT__TYPE__ALLOWED_VALUES,
  WUI_INPUT__TYPE__DEFAULT_VALUE,
} from './input'

export default defineComponent({
  name: 'WuiInput',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: null,
    },
    id: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: WUI_INPUT__TYPE__DEFAULT_VALUE,
      validator: (value: string) =>
        WUI_INPUT__TYPE__ALLOWED_VALUES.includes(value),
    },
    mask: Boolean,
    disabled: Boolean,
    placeholder: {
      type: String,
      default: null,
    },
    labelTop: {
      type: String,
      default: null,
    },
    prefix: {
      type: String,
      default: null,
    },
    suffix: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
    suffixIcon: {
      type: String,
      default: null,
    },
    prefixIcon: {
      type: String,
      default: null,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const focus = ref(false)

    function input(e: Event) {
      emit('update:modelValue', (e.target as HTMLInputElement).value)
    }

    return { input, focus }
  },
})
</script>

<style lang="css">
@import url('input.css');
</style>
