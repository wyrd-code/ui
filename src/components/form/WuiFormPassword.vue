<template>
  <WuiFormFieldWrapper
    class="wui-form-password"
    :label="label"
    :id="id"
    :help="help"
    :validation="validation"
  >
    <WuiInput
      type="password"
      :name="name"
      :disabled="disabled"
      :placeholder="placeholder"
      v-model="value"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts" setup>
import { inputProps } from './form.props'
import { useFormInstance } from './useFormInstance'
import WuiFormFieldWrapper from './WuiFormFieldWrapper.vue'

const props = defineProps({
  ...inputProps,
})

const form = useFormInstance()
const value = form.getFieldValue(props.name)
</script>
