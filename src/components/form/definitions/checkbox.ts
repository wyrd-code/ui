import WuiCheckbox from '../../checkbox/WuiCheckbox.vue'
import { wrapFieldComponent } from '../form.field.wrapper'
import type { FormFieldDefinition } from '../form.types'

export const WuiFormCheckbox = wrapFieldComponent({
  component: WuiCheckbox,
  type: 'checkbox',
  adjustProps: (attributes) => {
    // Remove label from wrapper and use it for WuiCheckbox (inner)
    return {
      wrapper: {
        ...attributes.wrapper,
        label: undefined,
      },
      inner: {
        ...attributes.inner,
        label: attributes.wrapper.label,
      },
    }
  },
})

export const checkbox: FormFieldDefinition = {
  component: WuiFormCheckbox,
  isValued: true,
  isValidated: true,
  allowedAttributes: [
    'type',
    'label',
    'subLabel',
    'pulse',
    'disabled',
    'lineThrough',
    'color',
  ],
}
