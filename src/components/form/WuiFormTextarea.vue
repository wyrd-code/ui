<template>
  <WuiFormFieldWrapper
    :id="id"
    class="wui-form-textarea"
    :label="label"
    :help="help"
  >
    <WuiTextarea
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
import { formFieldWrapperProps } from '@/components/form/form.props'
import { useFormInstance } from '@/components/form/useFormInstance'
import WuiFormFieldWrapper from '@/components/form/WuiFormFieldWrapper.vue'
import { WUI_TEXTAREA_PROPS } from '@/components/textarea'
import WuiTextarea from '@/components/textarea/WuiTextarea.vue'
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
