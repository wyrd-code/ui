import WuiInput from '../../input/WuiInput.vue'
import { wrapFieldComponent } from '../form.field.wrapper'
import type { FormFieldDefinition } from '../form.types'

export const WuiFormText = wrapFieldComponent({
  component: WuiInput,
  type: 'text',
})

export const text: FormFieldDefinition = {
  component: WuiFormText,
  isValued: true,
  isValidated: true,
  allowedAttributes: [
    'help',
    'label',
    'status',
    'type',
    'mask',
    'disabled',
    'placeholder',
    'prefix',
    'suffix',
    'prefixIcon',
    'suffixIcon',
  ],
}
