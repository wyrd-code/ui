import { h, Component } from 'vue'

import { FormComponentWrapperProps } from './form.types'
import { useFormField } from './useFormField'
import WuiFormFieldWrapper from './WuiFormFieldWrapper.vue'

export const wrapFieldComponent = <T>(opts: {
  component: Component
  type: string
  wrapper?: boolean | { label: boolean }
  adjustProps?: (props: FormComponentWrapperProps) => any
}): Component => {
  return {
    name: 'Wrapped',
    inheritAttrs: false,
    data() {
      return {
        field: undefined,
      }
    },
    computed: {
      computedPropsBase() {
        const { attributes, properties } = this.field
        const value = {
          ...attributes,
          ...properties,
        }

        if (opts.wrapper === false) {
          return value
        }

        const { label, help, validation, ...inner } = value
        const wrapper = { label, help, validation }

        return {
          wrapper,
          inner,
        }
      },
      computedProps() {
        return opts.adjustProps
          ? opts.adjustProps(this.computedPropsBase)
          : this.computedPropsBase
      },
    },
    created() {
      this.field = useFormField<T>({
        type: opts.type,
        name: this.$attrs.name,
        attrs: this.$attrs,
      })
    },
    render() {
      if (opts.wrapper === false) {
        return h(opts.component as any, this.computedProps)
      }

      return h(WuiFormFieldWrapper, this.computedProps.wrapper, () => [
        h(opts.component as any, this.computedProps.inner),
      ])
    },
  }
}
