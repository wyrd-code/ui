<template>
  <WuiButton
    class="wui-form-submit"
    :disabled="disabled"
    :label="label"
    @click="form.submit"
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
