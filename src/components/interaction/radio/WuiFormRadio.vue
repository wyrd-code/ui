<template>
  <WuiFormFieldWrapper
    v-bind="{
      schema,
      isValid,
      messages,
    }"
    class="input-radios"
  >
    <WuiRadio
      v-for="(option, idx) in schema.options"
      :key="`radio-${idx}-${option.value}`"
      :model-value="modelValue"
      v-bind="option"
      :disabled="isDisabled || option.disabled"
      :name="schema.name"
      @update:model-value="onChange"
      @focus="onFocus"
      @blur="onBlur"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import type { FormFieldRadio } from '@/types'

import { wuiFormInputPropsBase } from '../form/field.props'
import WuiFormFieldWrapper from '../form/WuiFormFieldWrapper.vue'

export default defineComponent({
  components: {
    WuiFormFieldWrapper,
  },
  props: {
    ...wuiFormInputPropsBase,
    schema: {
      type: Object as PropType<FormFieldRadio>,
      required: true,
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: null,
    },
  },
})
</script>

<style lang="css">
.input-radios {
  @apply space-y-3;
}
</style>
