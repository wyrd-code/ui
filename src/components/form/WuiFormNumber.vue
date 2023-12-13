<template>
  <WuiFormFieldWrapper
    class="wui-form-number"
    :label="label"
    :id="id"
    :help="help"
  >
    <WuiNumberInput
      :id="id"
      :name="name"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      v-model="value"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts" setup>
import { WUI_NUMBER_INPUT_PROPS } from '@/components/input';
import { formFieldWrapperProps } from './form.props'
import { useFormInstance } from './useFormInstance'
import WuiFormFieldWrapper from './WuiFormFieldWrapper.vue'
import { useHtmlId } from '@/composables'

const props = defineProps({
  ...formFieldWrapperProps,
  ...WUI_NUMBER_INPUT_PROPS,
})

const id = useHtmlId()
const form = useFormInstance()
const value = form.getFieldValue(props.name)
</script>
