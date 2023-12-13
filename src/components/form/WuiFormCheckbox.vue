<template>
  <WuiFormFieldWrapper
    class="wui-form-checkbox"
    :id="id"
    :help="help"
  >
    <WuiCheckbox
      :name="name"
      :label="label"
      :id="id"
      :disabled="disabled"
      v-model="value"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts" setup>
import { formFieldWrapperProps } from './form.props'
import { useFormInstance } from './useFormInstance'
import { WUI_CHECKBOX_PROPS } from '@/components/checkbox'
import WuiFormFieldWrapper from './WuiFormFieldWrapper.vue'
import { useHtmlId } from '@/composables'

const props = defineProps({
  ...formFieldWrapperProps,
  ...WUI_CHECKBOX_PROPS,
})

const id = useHtmlId()
const form = useFormInstance()
const value = form.getFieldValue(props.name)
</script>
