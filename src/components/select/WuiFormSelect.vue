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
      :model-value="value"
      :disabled="isDisabled"
      :name="schema.name"
      :options="schema.options"
      @update:modelValue="onChange"
      @focus="onFocus"
      @blur="onBlur"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { FormFieldSelect } from '~/ui.types';

import { wuiFormInputPropsBase } from '../form/field.props'






export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<FormFieldSelect>,
      required: true,
    },
    ...wuiFormInputPropsBase,
  },
})
</script>
