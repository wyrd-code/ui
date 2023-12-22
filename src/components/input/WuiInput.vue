<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div
    class="wui-input-wrapper"
    :class="{
      status,
      disabled,
      prefix: prefix || $slots.prefix,
      suffix: suffix || $slots.suffix,
      'prefix-icon': $slots.prefixIcon,
      'suffix-icon': $slots.suffixIcon,
    }"
  >
      <slot name="prefix">
        <div v-if="prefix" class="wui-input-prefix">
            {{ prefix }}
        </div>
      </slot>
      <div class="wui-input">
        <span v-if="$slots.prefixIcon" class="wui-input-prefix-icon">
          <span class="wui-input-icon" :name="prefixIcon">
            <slot name="prefixIcon" />
          </span>
        </span>
        <input
          :id="id"
          :type="type"
          :name="name"
          :autocomplete="autocomplete"
          :disabled="disabled"
          :value="modelValue"
          :placeholder="placeholder"
          @change="input"
        />
        <span v-if="$slots.suffixIcon" class="wui-input-suffix-icon">
          <span class="wui-input-icon" :name="suffixIcon">
            <slot name="suffixIcon" />
          </span>
        </span>
      </div>
      <slot name="suffix">
        <div v-if="suffix" class="wui-input-suffix">
            {{ suffix }}
        </div>
      </slot>
    <div
      v-if="message"
      class="wui-input-message"
    >
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WUI_INPUT_PROPS } from './input'

defineProps(WUI_INPUT_PROPS)

const emit = defineEmits(['update:modelValue'])

function input(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style lang="css">
@import url('input.css');
</style>
