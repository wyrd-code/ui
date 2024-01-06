<template>
  <WuiFormFieldWrapper
    :id="id"
    class="wui-form-select"
    :label="label"
    :uses-html-control="true"
    :hint="hint"
  >
    <WuiSelect
      :id="id"
      v-model="value"
      :name="name"
      :disabled="disabled"
      :divided="divided"
      :options="options"
      :placement="placement"
      :placeholder="placeholder"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts" setup>
import { useFormInstance } from '@/components/form/useFormInstance'
import WuiFormFieldWrapper from '@/components/form/WuiFormFieldWrapper.vue'
import { WUI_SELECT_PROPS } from '@/components/select/select'
import WuiSelect from '@/components/select/WuiSelect.vue'
import { useHtmlId } from '@/composables'

import { formFieldWrapperProps } from './form.props'

const props = defineProps({
  ...formFieldWrapperProps,
  ...WUI_SELECT_PROPS,
})

const id = useHtmlId()
const form = useFormInstance()
const value = form.getFieldValue<string | number | undefined>(props.name)
</script>
