<template>
  <WuiFormFieldWrapper
    class="wui-form-radio"
    :id="id"
    :help="help"
  >
    <WuiRadio
      :label="label"
      :disabled="disabled"
      :items="items"
      :orientation="orientation"
      v-model="value"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts" setup>
import { WUI_RADIO_PROPS } from '../radio'
import { formFieldWrapperProps } from './form.props'
import { useFormInstance } from './useFormInstance'
import WuiFormFieldWrapper from './WuiFormFieldWrapper.vue'
import { useHtmlId } from '@/composables'

const props = defineProps({
  ...formFieldWrapperProps,
  ...WUI_RADIO_PROPS,
})

const id = useHtmlId()
const form = useFormInstance()
const value = form.getFieldValue(props.name)
</script>
