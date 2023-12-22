<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <WuiInput
    type="number"
    :id="id"
    :name="name"
    :autocomplete="autocomplete"
    :disabled="disabled"
    :value="modelValue"
    :placeholder="placeholder"
    :modelValue="modelValue"
    @update:modelValue="input"
  >
    <template #prefix>
      <WuiButton
        class="wui-input-prefix"
        variant="secondary"
        size="sm"
        shape="square"
        @click="decrease"
      >
        <span class="icon-ph-minus" />
      </WuiButton>
    </template>
    <template #suffix>
      <WuiButton
        class="wui-input-suffix"
        variant="secondary"
        size="sm"
        shape="square"
        @click="increase"
      >
        <span class="icon-ph-plus" />
      </WuiButton>
    </template>
  </WuiInput>
</template>

<script lang="ts" setup>
import { WUI_NUMBER_INPUT_PROPS } from './input'

const props = defineProps(WUI_NUMBER_INPUT_PROPS)

const emit = defineEmits(['update:modelValue'])

function input(value) {
  emit('update:modelValue', Number(value))
}

function increase() {
  emit('update:modelValue', props.modelValue + 1)
}

function decrease() {
  emit('update:modelValue', props.modelValue - 1)
}
</script>

<style lang="css">
.wui-btn.wui-input-prefix,
.wui-btn.wui-input-suffix {
  @apply h-auto;
}
</style>
