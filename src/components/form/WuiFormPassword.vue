<template>
  <WuiFormFieldWrapper
    v-bind="{
      schema,
      isValid,
      messages,
    }"
    class="input-text input-password"
  >
    <WuiInput
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
import WuiFormFieldWrapper from '../form/WuiFormFieldWrapper.vue'
import { wuiFormInputPropsBase } from './field.props'

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
    onChange: {
      type: Function as PropType<(payload: Event) => void>,
      required: true,
    },
  },
})
</script>
