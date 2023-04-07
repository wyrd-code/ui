export const WUI_AVATAR_SIZES = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl']

export const WUI_AVATAR_SIZE_DEFAULT = 'base'

export const WUI_AVATAR_PROPS = {
  // variant: {
  //   type: String,
  //   default: WUI_AVATAR_VARIANT_DEFAULT,
  //   validator: (value: string) => WUI_AVATAR_VARIANTS.includes(value),
  // },
  src: { type: String, default: null },
  label: { type: String, default: null },
  name: { type: String, default: null },
  size: {
    type: String,
    default: WUI_AVATAR_SIZE_DEFAULT,
    validator: (value: string) => WUI_AVATAR_SIZES.includes(value),
  },
  square: { type: Boolean },
}
