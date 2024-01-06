<template>
  <WuiFormFieldWrapper
    :id="id"
    class="wui-form-checkbox"
    :help="help"
  >
    <WuiCheckbox
      :id="id"
      v-model="value"
      :name="name"
      :label="label"
      :disabled="disabled"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts" setup>
import { WUI_CHECKBOX_PROPS } from '@/components/checkbox'
import { useHtmlId } from '@/composables'

import { formFieldWrapperProps } from './form.props'
import { useFormInstance } from './useFormInstance'
import WuiFormFieldWrapper from './WuiFormFieldWrapper.vue'

const props = defineProps({
  ...formFieldWrapperProps,
  ...WUI_CHECKBOX_PROPS,
})

const id = useHtmlId()
const form = useFormInstance()
const value = form.getFieldValue(props.name)
</script>
