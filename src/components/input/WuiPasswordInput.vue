<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <WuiInput
    :id="id"
    :type="type"
    :name="name"
    :autocomplete="autocomplete"
    :disabled="disabled"
    :value="modelValue"
    :placeholder="placeholder"
    :model-value="modelValue"
    @update:model-value="input"
  >
    <template #suffix>
      <WuiButton
        variant="secondary"
        size="sm"
        shape="square"
        class="wui-input-suffix"
        @click="toggleShowPassword"
      >
        <span
          v-if="showPassword"
          class="icon-ph-eye"
        />
        <span
          v-else
          class="icon-ph-eye-slash"
        />
      </WuiButton>
    </template>
  </WuiInput>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { WUI_PASSWORD_INPUT_PROPS } from './input'

defineProps(WUI_PASSWORD_INPUT_PROPS)

const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false)
const type = ref('password')

function input(value) {
  emit('update:modelValue', String(value))
}

function toggleShowPassword() {
  showPassword.value = !showPassword.value
  type.value = type.value === 'password' ? 'text' : 'password'
}
</script>

<style lang="css">
.wui-btn.wui-input-suffix {
  @apply h-auto;
}
</style>
