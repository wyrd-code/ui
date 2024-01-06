<template>
  <WuiFormFieldWrapper
    :id="id"
    class="wui-form-number"
    :label="label"
    :hint="hint"
  >
    <WuiNumberInput
      :id="id"
      v-model="value"
      :name="name"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts" setup>
import { WUI_NUMBER_INPUT_PROPS } from '@/components/input'
import { useHtmlId } from '@/composables'

import { formFieldWrapperProps } from './form.props'
import { useFormInstance } from './useFormInstance'
import WuiFormFieldWrapper from './WuiFormFieldWrapper.vue'

const props = defineProps({
  ...formFieldWrapperProps,
  ...WUI_NUMBER_INPUT_PROPS,
})

const id = useHtmlId()
const form = useFormInstance()
const value = form.getFieldValue(props.name)
</script>
