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

import { WuiForm, FormField } from '~/ui.types'

import { formFieldMapper } from './field.mapper'

export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<FormField>,
      required: true,
    },
    form: {
      type: Object as PropType<WuiForm>,
      required: true,
    },
  },
  emits: ['change', 'validate', 'blur', 'focus'],
  setup(props, { emit }) {
    const type = props?.schema?.type || 'div'
    const mapper = formFieldMapper[type]
    const dynamicProps = computed(() => {
      if (!mapper) {
        return {
          class: props.schema.customClass,
        }
      }

      return mapper.getProps(props.schema, emit, props.form)
    })

    return {
      component: mapper?.component || type,
      dynamicProps,
    }
  },
})
</script>
