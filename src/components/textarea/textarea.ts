export const WUI_TEXTAREA_PROPS = {
  modelValue: {
    type: [String, Number],
    default: null,
  },
  name: {
    type: String,
    required: true,
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
  resizable: Boolean,
  resizeOnWrite: Boolean,
  rows: { type: Number, default: 4 },
  // message: {
  //   type: String,
  //   default: null,
  // },
  // status: {
  //   type: String,
  //   default: null,
  // },
}
