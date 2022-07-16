<template>
  <WuiFormFieldWrapper
    v-bind="{
      schema,
      isValid,
      messages,
    }"
    class="input-select"
  >
    <WuiSelect
      :model-value="modelValue"
      :disabled="isDisabled"
      :name="schema.name"
      :options="schema.options"
      @update:model-value="onChange"
      @focus="onFocus"
      @blur="onBlur"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { FormFieldSelect } from '../../ui.types'
import { wuiFormInputPropsBase } from '../form/field.props'
import WuiFormFieldWrapper from '../form/WuiFormFieldWrapper.vue'

export default defineComponent({
  components: {
    WuiFormFieldWrapper,
  },
  props: {
    ...wuiFormInputPropsBase,
    schema: {
      type: Object as PropType<FormFieldSelect>,
      required: true,
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: null,
    },
  },
})
</script>
