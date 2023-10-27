export const WUI_BUTTON_VARIANTS = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
]

export const WUI_BUTTON_VARIANT_DEFAULT = 'secondary'

export const WUI_BUTTON_SIZES = ['sm', 'base', 'lg', 'xl']

export const WUI_BUTTON_SIZE_DEFAULT = 'base'

export const WUI_BUTTON_SHAPES = ['round', 'square', 'rounded']

export const WUI_BUTTON_SHAPE_DEFAULT = 'rounded'

export const WUI_BUTTON_PROPS = {
  variant: {
    type: String,
    default: WUI_BUTTON_VARIANT_DEFAULT,
    validator: (value: string) => WUI_BUTTON_VARIANTS.includes(value),
  },
  size: {
    type: String,
    default: WUI_BUTTON_SIZE_DEFAULT,
    validator: (value: string) => WUI_BUTTON_SIZES.includes(value),
  },
  shape: {
    type: String,
    default: WUI_BUTTON_SHAPE_DEFAULT,
    validator: (value: string) => WUI_BUTTON_SHAPES.includes(value),
  },
  outlined: { type: Boolean },
  ghost: { type: Boolean },
}
