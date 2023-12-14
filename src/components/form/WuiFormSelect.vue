<template>
  <WuiFormFieldWrapper
    class="wui-form-select"
    :label="label"
    :id="id"
    :help="help"
  >
    <WuiSelect
      :id="id"
      :name="name"
      :disabled="disabled"
      :divided="divided"
      :options="options"
      :placement="placement"
      :placeholder="placeholder"
      v-model="value"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts" setup>
import { formFieldWrapperProps } from './form.props'
import { useFormInstance } from '@/components/form/useFormInstance'
import WuiFormFieldWrapper from '@/components/form/WuiFormFieldWrapper.vue'
import WuiSelect from '@/components/select/WuiSelect.vue'
import { WUI_SELECT_PROPS } from '@/components/select/select'
import { useHtmlId } from '@/composables'

const props = defineProps({
  ...formFieldWrapperProps,
  ...WUI_SELECT_PROPS,
})

const id = useHtmlId()
const form = useFormInstance()
const value = form.getFieldValue<string | number | undefined>(props.name)
</script>
