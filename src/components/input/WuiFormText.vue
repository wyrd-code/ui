<template>
  <WuiFormFieldWrapper
    v-bind="{
      schema,
      isValid,
      messages,
    }"
    class="input-text"
  >
    <WuiInput
      rel="input"
      class="input"
      :type="type"
      :disabled="disabled"
      :name="name"
      :model-value="value"
      :placeholder="schema.placeholder"
      @update:model-value="onChange"
      @focus="onFocus"
      @blur="onBlur"
    />
  </WuiFormFieldWrapper>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

import { wuiFormInputPropsBase } from '../form/field.props'
import WuiFormFieldWrapper from '../form/WuiFormFieldWrapper.vue'

defineProps({
  ...wuiFormInputPropsBase,
})
</script>
