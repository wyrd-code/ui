export const WUI_BREADCRUMB_SIZES = ['xs', 'sm', 'base', 'lg', 'xl']

export const WUI_BREADCRUMB_SIZE_DEFAULT = 'base'

export const WUI_BREADCRUMB_PROPS = {
  size: {
    type: String,
    default: WUI_BREADCRUMB_SIZE_DEFAULT,
    validator: (value: string) => WUI_BREADCRUMB_SIZES.includes(value),
  },
  loading: { type: Boolean },
}
