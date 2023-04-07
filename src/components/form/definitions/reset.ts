import WuiButton from '../../button/WuiButton.vue'
import { wrapFieldComponent } from '../form.field.wrapper'
import type { FormFieldDefinition } from '../form.types'

export const WuiFormReset = wrapFieldComponent({
  component: WuiButton,
  type: 'reset',
  wrapper: false,
})

export const reset: FormFieldDefinition = {
  component: WuiFormReset,
  allowedAttributes: ['type', 'label', 'disabled', 'class'],
  getListeners: ({ reset: onClick }) => {
    return {
      onClick,
    }
  },
}
