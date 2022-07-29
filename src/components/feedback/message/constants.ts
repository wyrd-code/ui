import { Colors } from '@/core'

export const typeIcon: { [key in Colors]?: string } = {
  [Colors.PRIMARY]: 'info_outline',
  [Colors.SUCCESS]: 'done',
  [Colors.WARNING]: 'error_outline',
  [Colors.DANGER]: 'clear',
}
