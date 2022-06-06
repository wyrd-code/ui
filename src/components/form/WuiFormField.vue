<template>
  <component :is="component" class="form-component" v-bind="dynamicProps">
    <template v-if="schema.children">
      <WuiFormField
        v-for="(childSchema, idx) in schema.children"
        :key="`form-field-${idx}`"
        :schema="childSchema"
        :form="form"
      />
    </template>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'

import { FormController, FormField } from '../../ui.types'
import { formFieldMapper, getFieldProps } from './field.mapper'

export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<FormField>,
      required: true,
    },
    form: {
      type: Object as PropType<FormController>,
      required: true,
    },
  },
  emits: ['change', 'validate', 'blur', 'focus'],
  setup(props, { emit }) {
    const type = props?.schema?.type || 'div'
    const component = formFieldMapper[type]
    const dynamicProps = computed(() => {
      if (!component) {
        // For regular html elements just pass the class prop
        return {
          class: props.schema.customClass,
        }
      }

      return getFieldProps(props.schema, emit, props.form)
    })

    return {
      component: component || type,
      dynamicProps,
    }
  },
})
</script>
