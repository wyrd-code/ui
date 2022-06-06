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
    schema: {
      type: Object as PropType<FormFieldSelect>,
      required: true,
    },
    ...wuiFormInputPropsBase,
    onChange: {
      type: Function as PropType<(payload: Event) => void>,
      required: true,
    },
  },
})
</script>
