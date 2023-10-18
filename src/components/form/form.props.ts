import type { PropType } from 'vue'
import type {
  FormFieldValidation,
} from '@/components/form/form.types'

export const vModelProps = {
  modelValue: {
    type: [Array, String, Number, Object, Boolean] as
      PropType<string | number | boolean | Array<unknown> | null>,
    default: null,
  },
  'onUpdate:modelValue': {
    type: Function,
    required: true,
  }
}

export const inputProps = {
  // component props
  name: {
    type: String,
    default: null,
    required: true,
  },
  placeholder: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  // wrapper props
  label: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
  help: {
    type: String,
    default: null,
  },
  validation: {
    type: Object as PropType<FormFieldValidation>,
    default: () => ({}),
  },
}
