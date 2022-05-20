<template>
  <WuiFormFieldWrapper
    v-bind="{
      schema,
      isValid,
      messages,
    }"
    class="input-blank"
  >
    <slot />
  </WuiFormFieldWrapper>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { FormFieldText } from '../../ui.types'
import { wuiFormInputPropsBase } from '../form/field.props'

export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<FormFieldText>,
      required: true,
    },
    ...wuiFormInputPropsBase,
  },
})
</script>
