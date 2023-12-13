<template>
  <WuiFormFieldWrapper
    class="wui-form-textarea"
    :label="label"
    :id="id"
    :help="help"
  >
    <WuiTextarea
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
import { formFieldWrapperProps } from '@/components/form/form.props'
import { useFormInstance } from '@/components/form/useFormInstance'
import WuiFormFieldWrapper from '@/components/form/WuiFormFieldWrapper.vue'
import WuiTextarea from '@/components/textarea/WuiTextarea.vue'
import { WUI_TEXTAREA_PROPS } from '@/components/textarea'
import { useHtmlId } from '@/composables'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  ...formFieldWrapperProps,
  ...WUI_TEXTAREA_PROPS,
})

const id = useHtmlId()
const form = useFormInstance()
const value = form.getFieldValue<string | undefined>(props.name)
</script>
