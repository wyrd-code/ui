import { Placement } from '@/domain'

export const WUI_PROGRESS_BAR_PLACEHOLDER = 'loading...'

export const WUI_PROGRESS_BAR_SIZES = ['xs', 'sm', 'base', 'lg', 'xl']

export const WUI_PROGRESS_BAR_SIZE_DEFAULT = 'base'

export const WUI_PROGRESS_BAR_SHAPES = ['round', 'rounded', 'square']

export const WUI_PROGRESS_BAR_SHAPE_DEFAULT = 'round'

export const WUI_PROGRESS_BAR_PROPS = {
  label: {
    type: [String, Boolean],
    default: null,
  },
  size: {
    type: String,
    default: WUI_PROGRESS_BAR_SIZE_DEFAULT,
    validator: (value: string) => WUI_PROGRESS_BAR_SIZES.includes(value),
  },
  infinite: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  percentage: {
    type: Number,
    default: 0,
    validator: (val: number) => val >= 0 && val <= 100,
  },
  showPercentage: {
    type: Boolean,
    default: true,
  },
  tooltip: {
    type: String,
    default: Placement.Top,
    validator: (val: Placement) =>
      [Placement.Top, Placement.Bottom].includes(val),
  },
  showTooltip: {
    type: Boolean,
    default: true,
  },
  sliding: {
    type: Boolean,
    default: false,
  },
  moving: {
    type: Boolean,
    default: false,
  },
  striped: {
    type: Boolean,
    default: false,
  },
  centered: {
    type: Boolean,
    default: false,
  },
  shape: {
    type: String,
    default: WUI_PROGRESS_BAR_SHAPE_DEFAULT,
    validator: (value: string) => WUI_PROGRESS_BAR_SHAPES.includes(value),
  },
}
