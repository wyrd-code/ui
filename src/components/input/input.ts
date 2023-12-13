export const WUI_INPUT__TYPE__ALLOWED_VALUES = [
  'text',
  'password',
  'number',
  'email',
  'phone',
  'url',
]

export const WUI_INPUT__TYPE__DEFAULT_VALUE = 'text'

export const WUI_BASE_INPUT_PROPS = {
  name: {
    type: String,
    default: null,
  },
  status: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
  disabled: Boolean,
  placeholder: {
    type: String,
    default: null,
  },
  autocomplete: {
    type: String,
    default: null,
  },
}

export const WUI_NUMBER_INPUT_PROPS = {
  ...WUI_BASE_INPUT_PROPS,
  modelValue: {
    type: [Number],
    default: null,
  },
}

export const WUI_PASSWORD_INPUT_PROPS = {
  ...WUI_BASE_INPUT_PROPS,
  modelValue: {
    type: [String],
    default: null,
  },
}

export const WUI_INPUT_PROPS = {
  ...WUI_NUMBER_INPUT_PROPS,
  modelValue: {
    type: [String, Number],
    default: null,
  },
  // mask: Boolean,
  // labelTop: {
  //   type: String,
  //   default: null,
  // },
  type: {
    type: String,
    default: WUI_INPUT__TYPE__DEFAULT_VALUE,
    validator: (value: string) =>
      WUI_INPUT__TYPE__ALLOWED_VALUES.includes(value),
  },
  prefix: {
    type: String,
    default: null,
  },
  suffix: {
    type: String,
    default: null,
  },
  message: {
    type: String,
    default: null,
  },
  suffixIcon: {
    type: String,
    default: null,
  },
  prefixIcon: {
    type: String,
    default: null,
  },
}
