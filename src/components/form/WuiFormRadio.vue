<template>
  <WuiFormFieldWrapper :id="id" class="wui-form-radio" :help="help">
    <WuiRadio
      v-model="value"
      :label="label"
      :disabled="disabled"
      :items="items"
      :orientation="orientation"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts" setup>
import { useHtmlId } from '@/composables'

import { WUI_RADIO_PROPS } from '../radio'
import { formFieldWrapperProps } from './form.props'
import { useFormInstance } from './useFormInstance'
import WuiFormFieldWrapper from './WuiFormFieldWrapper.vue'

const props = defineProps({
  ...formFieldWrapperProps,
  ...WUI_RADIO_PROPS,
})

const id = useHtmlId()
const form = useFormInstance()
const value = form.getFieldValue(props.name)
</script>
