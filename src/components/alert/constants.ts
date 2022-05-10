import { Colors } from '../../models/enums'

export const ICON_BY_TYPE: Partial<Record<Colors, string>> = {
  [Colors.NEUTRAL]: 'i-ph-circle-wavy',
  [Colors.PRIMARY]: 'i-ph-circle-wavy',
  [Colors.INFO]:    'i-ph-circle-wavy-warning',
  [Colors.SUCCESS]: 'i-ph-circle-wavy-check',
  [Colors.WARNING]: 'i-ph-warning',
  [Colors.DANGER]:  'i-ph-warning',
}

export const ALLOWED_TYPES = [
  Colors.NEUTRAL,
  Colors.PRIMARY,
  Colors.INFO,
  Colors.SUCCESS,
  Colors.WARNING,
  Colors.DANGER,
]
