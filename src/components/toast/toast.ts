import { Colors } from '@/domain'

export const WUI_TOAST_SYMBOL = '__Wui_Toast'

export const WUI_TOAST_PLACEMENTS = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
] as const

export type ToastPlacement = typeof WUI_TOAST_PLACEMENTS[number]

export const WUI_TOAST_PLACEMENT_DEFAULT = 'top'

export const WUI_TOAST_DURATION_DEFAUT = 5

export const WUI_TOAST_MAX_VISIBLE_DEFAUT = 3

export const WUI_TOAST_CLOSABLE_DEFAUT = true

export const WUI_TOAST_VARIANTS = [
  'primary',
  'secondary',
  'neutral',
  'info',
  'success',
  'warning',
  'danger',
] as const

export type ToastVariant = typeof WUI_TOAST_VARIANTS[number]

export const WUI_TOAST_VARIANT_DEFAULT = 'neutral'

export interface ToastOptions {
  duration?: number
  icon?: string
  onClose?: () => void
  closable?: boolean
  placement?: ToastPlacement
  variant?: ToastVariant
  label?: string | number
  description?: string | number
  maxVisible?: number
}

// @unocss-include

export const WUI_TOAST_ICONS: { [key in Colors]?: string } = {
  [Colors.PRIMARY]: 'icon-ph-info',
  [Colors.SECONDARY]: 'icon-ph-info',
  [Colors.NEUTRAL]: 'icon-ph-info',
  [Colors.INFO]: 'icon-ph-info',
  [Colors.SUCCESS]: 'icon-ph-check-circle',
  [Colors.WARNING]: 'icon-ph-warning-circle',
  [Colors.DANGER]: 'icon-ph-warning',
}
