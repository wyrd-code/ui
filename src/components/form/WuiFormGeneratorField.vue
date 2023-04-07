<template>
  <component
    :is="component"
    v-bind="{ name, ...$attrs, ...attributes, ...properties }"
  >
    <WuiFormGeneratorField
      v-for="(childSchema, idx) in children || []"
      :key="`form-field-${idx}-${name}`"
      :schema="childSchema"
    />
  </component>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { computed, PropType } from 'vue'

import { isString } from '@/utilities'

import type { FormFieldSchema } from './form.types'
import { useFormField } from './useFormField'

const props = defineProps({
  schema: {
    type: [Object, String] as PropType<FormFieldSchema | string>,
    default: null,
  },
})

let field
let children: (FormFieldSchema | string)[] = []
const name = computed<string | undefined>(() =>
  !isString(props.schema) ? props.schema?.name : undefined
)

if (isString(props.schema)) {
  field = useFormField({
    type: props.schema,
    name: undefined,
  })
} else {
  children = props.schema.children || []
  field = useFormField(props.schema)
}

const { component, attributes, properties } = field
</script>
