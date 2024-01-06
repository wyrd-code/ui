import { formFieldWrapperProps } from '@/components/form/form.props'

export const WUI_CHECKBOX_VARIANTS = [
  'accent',
  'primary',
  'neutral',
  'warning',
  'info',
  'success',
  'danger',
]

export const WUI_CHECKBOX_VARIANT_DEFAULT = 'accent'

export const WUI_CHECKBOX_SIZES = ['sm', 'base', 'lg', 'xl']

export const WUI_CHECKBOX_SIZE_DEFAULT = 'base'

export const WUI_CHECKBOX_PROPS = {
  ...formFieldWrapperProps,
  modelValue: {
    type: [Boolean, String],
    default: false,
    validator: (value: 'mixed' | boolean) =>
      [true, false, 'mixed'].includes(value),
  },
  variant: {
    type: String,
    default: WUI_CHECKBOX_VARIANT_DEFAULT,
    validator: (value: string) => WUI_CHECKBOX_VARIANTS.includes(value),
  },
  size: {
    type: String,
    default: WUI_CHECKBOX_SIZE_DEFAULT,
    validator: (value: string) => WUI_CHECKBOX_SIZES.includes(value),
  },
  label: { type: String, default: null },
  hint: { type: String, default: null },
  pulse: { type: Boolean },
  disabled: { type: Boolean },
  readonly: { type: Boolean },
  strike: { type: Boolean },
}
