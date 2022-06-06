<template>
  <WuiFormFieldWrapper
    v-bind="{
      schema,
      isValid,
      messages,
    }"
    class="input-text"
  >
    <WuiTextarea
      rel="input"
      class="input"
      :type="schema.type"
      :disabled="isDisabled"
      :name="schema.name"
      :model-value="value"
      :placeholder="schema.placeholder"
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

export default defineComponent({
  components: {
    WuiFormFieldWrapper,
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
