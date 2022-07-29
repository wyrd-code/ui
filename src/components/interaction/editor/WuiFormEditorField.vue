<template>
  <WuiFormFieldWrapper
    v-bind="{
      schema,
      isValid,
      messages,
    }"
    class="wui-input-editor"
  >
    <WuiFormEditor
      class="wui-input-editor-inner"
      :model-value="modelValue"
      @update:model-value="onChange"
      @focus="onFocus"
      @blur="onBlur"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { FormFieldText } from '@/types'

import { wuiFormInputPropsBase } from '../form/field.props'
import WuiFormFieldWrapper from '../form/WuiFormFieldWrapper.vue'
import WuiFormEditor from './WuiFormEditor.vue'

export default defineComponent({
  components: {
    WuiFormFieldWrapper,
    WuiFormEditor,
  },
  props: {
    ...wuiFormInputPropsBase,
    schema: {
      type: Object as PropType<FormFieldText>,
      required: true,
    },
    modelValue: {
      type: String,
      default: null,
    },
  },
})
</script>
