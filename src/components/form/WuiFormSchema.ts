import { h, defineComponent, PropType, resolveComponent } from 'vue'

import type {
  FormSchema,
  FormFieldSchema,
  FormFieldSchemaVueComponent,
} from '@/components/form/form.types'

const isFieldVueComponent = (
  field: FormFieldSchema
): field is FormFieldSchemaVueComponent => !!(field as any).component

export default defineComponent({
  functional: true,
  props: {
    schema: {
      type: Object as PropType<FormSchema>,
      required: true,
    },
  },
  setup({ schema }) {
    const buildVNodeFromFormFieldSchema = (
      field: FormFieldSchema,
      nested: any[]
    ) => {
      const { attributes } = field

      if (isFieldVueComponent(field)) {
        const { component, props } = field
        const componentModule = resolveComponent(component)

        return h(componentModule, { ...attributes, ...props }, () => nested)
      }

      return h(field.element, attributes, nested)
    }

    const recursiveRender = (fields: FormSchema) =>
      fields.reduce((body, field) => {
        const nested = (field.children && recursiveRender(field.children)) || []

        body.push(buildVNodeFromFormFieldSchema(field, nested))

        return body
      }, [] as any[])

    return () => recursiveRender(schema)
  },
})
