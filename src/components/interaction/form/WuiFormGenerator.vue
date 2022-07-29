<template>
  <template v-if="Array.isArray(schema) && schema.length">
    <WuiFormGeneratorField
      v-for="(fieldSchema, idx) in schema"
      :key="`form-field-${idx}`"
      :schema="fieldSchema"
    />
  </template>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'

import type { FormSchema } from './form.types'
import WuiFormGeneratorField from './WuiFormGeneratorField.vue'

defineProps({
  schema: {
    type: Array as PropType<FormSchema>,
    default: () => [],
  },
})
</script>
