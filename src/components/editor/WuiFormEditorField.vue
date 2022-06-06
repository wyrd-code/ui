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
      :model-value="value"
      @update:model-value="onChange"
      @focus="onFocus"
      @blur="onBlur"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { FormFieldText } from '../../ui.types'
import { wuiFormInputPropsBase } from '../form/field.props'
import WuiFormFieldWrapper from '../form/WuiFormFieldWrapper.vue'
import WuiFormEditor from './WuiFormEditor.vue'

export default defineComponent({
  components: {
    WuiFormFieldWrapper,
    WuiFormEditor,
  },
  props: {
    schema: {
      type: Object as PropType<FormFieldText>,
      required: true,
    },
    ...wuiFormInputPropsBase,
    // Note: copied from wuiFormInputPropsBase to fix ts error
    value: {
      type: [String],
      default: null,
    },
    onChange: {
      type: Function as PropType<(payload: Event) => void>,
      required: true,
    },
  },
})
</script>
