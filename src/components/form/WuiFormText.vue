<template>
  <WuiFormFieldWrapper
    :id="id"
    class="wui-form-text"
    :label="label"
    :help="help"
  >
    <WuiInput
      :id="id"
      v-model="value"
      :type="type"
      :name="name"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :prefix="prefix"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts" setup>
import { formFieldWrapperProps } from '@/components/form/form.props'
import { useFormInstance } from '@/components/form/useFormInstance'
import WuiFormFieldWrapper from '@/components/form/WuiFormFieldWrapper.vue'
import { WUI_INPUT_PROPS } from '@/components/input'
import WuiInput from '@/components/input/WuiInput.vue'
import { useHtmlId } from '@/composables'

const props = defineProps({
  ...formFieldWrapperProps,
  ...WUI_INPUT_PROPS,
})

const id = useHtmlId()
const form = useFormInstance()
const value = form.getFieldValue<string | number | undefined>(props.name)
</script>
