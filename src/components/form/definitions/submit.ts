import WuiButton from '../../button/WuiButton.vue'
import { wrapFieldComponent } from '../form.field.wrapper'
import type { FormFieldDefinition } from '../form.types'

export const WuiFormSubmit = wrapFieldComponent({
  component: WuiButton,
  type: 'submit',
  wrapper: false,
})

export const submit: FormFieldDefinition = {
  component: WuiFormSubmit,
  allowedAttributes: ['type', 'label', 'disabled', 'class'],
  getListeners: ({ submit: onClick }) => {
    return {
      onClick,
    }
  },
}
