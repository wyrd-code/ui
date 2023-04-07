// @unocss-include
import { Colors } from '@/domain'

export const WUI_ALERT_VARIANTS = [
  Colors.NEUTRAL,
  Colors.INFO,
  Colors.WARNING,
  Colors.DANGER,
  Colors.SUCCESS,
]

export const WUI_ALERT_DEFAULT_VARIANT = Colors.NEUTRAL

export const WUI_ALERT_EMITS = ['close']

export const WUI_ALERT_PROPS = {
  variant: {
    type: String,
    default: WUI_ALERT_DEFAULT_VARIANT,
    validator: (value: Colors) => WUI_ALERT_VARIANTS.includes(value),
  },
  transition: { type: String, default: 'fade' },
  closable: { type: Boolean, default: false },
  visible: { type: Boolean, default: true },
  title: { type: String, default: null },
  icon: { type: [String, Boolean], default: null },
  text: { type: String, default: null },
}

export const WUI_ALERT_VARIANT_ICONS: Record<string, string> = {
  [Colors.NEUTRAL]: 'icon-ph-info',
  [Colors.INFO]: 'icon-ph-info',
  [Colors.WARNING]: 'icon-ph-check-circle',
  [Colors.DANGER]: 'icon-ph-warning-circle',
  [Colors.SUCCESS]: 'icon-ph-warning',
}
