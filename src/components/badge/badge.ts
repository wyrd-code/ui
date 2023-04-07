import { Colors, Placement } from '@/domain'

export const WUI_BADGE_PLACEMENTS = [
  Placement.TopStart,
  Placement.TopEnd,
  Placement.BottomStart,
  Placement.BottomEnd,
]

export const WUI_BADGE_VARIANTS = [
  'neutral',
  'primary',
  'accent',
  'info',
  'success',
  'danger',
  'warning',
  'black',
  'white',
]

export const WUI_BADGE_PROPS = {
  as: {
    type: String,
    default: 'span',
  },
  variant: {
    type: String,
    default: Colors.NEUTRAL,
    validator: (value: Colors) => WUI_BADGE_VARIANTS.includes(value),
  },
  placement: {
    type: String,
    default: Placement.TopEnd,
    validator: (value: Placement) => WUI_BADGE_PLACEMENTS.includes(value),
  },
  value: { type: [String, Number], default: null },
  max: { type: Number, default: null },
  visible: { type: Boolean, default: true },
  showZero: { type: Boolean, default: false },
  dot: { type: Boolean },
  square: { type: Boolean },
}
