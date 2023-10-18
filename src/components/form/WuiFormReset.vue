<template>
  <WuiButton
    class="wui-form-reset"
    type="reset"
    :disabled="disabled"
    :label="label"
    @click="form.reset"
  >
    <slot />
  </WuiButton>
</template>

<script lang="ts" setup>
import { useFormInstance } from './useFormInstance'

defineProps({
  label: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const form = useFormInstance()
</script>
