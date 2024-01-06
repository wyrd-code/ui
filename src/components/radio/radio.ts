import { PropType } from 'vue'

import { Colors } from '@/domain'

export const allowedRadioTypes = [
  Colors.PRIMARY,
  Colors.SUCCESS,
  Colors.DANGER,
  Colors.WARNING,
  Colors.BLACK,
  Colors.NEUTRAL,
]

export interface WyrdRadio {
  label: string
  value: string | number
}

export const WUI_RADIO_PROPS = {
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | null>,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  orientation: {
    type: String,
    default: 'vertical',
    validator: (val: string) => ['vertical', 'horizontal'].includes(val),
  },
  items: { type: Array as () => Array<WyrdRadio>, default: () => [] },
  label: {
    type: String,
    default: null,
  },
  hint: {
    type: String,
    default: null,
  },
}
