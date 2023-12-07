import { RouterLinkProps } from '@/domain/navigation'

export interface WyrdListItem extends RouterLinkProps {
  label: string
  icon?: string
  iconClass?: string
  image?: string
  description?: string
  class?: string
  role?: 'listitem' | 'menuitem' | 'separator' | 'group'
  children?: WyrdList
}

export type WyrdListItems = Array<WyrdListItem | string>

export type WyrdList = {
  items: WyrdListItems
  [x: string]: unknown
}

// @unocss-include

export const WUI_LIST_SIZES = ['sm', 'base', 'lg', 'xl']

export const WUI_LIST_SIZE_DEFAULT = 'base'

export const WUI_LIST_POSITIONS = ['inside', 'outside']

export const WUI_LIST_POSITION_DEFAULT = 'outside'

// Note: class names in comments are there to be picked up by UnoCSS.
// Keep them in place

export const WUI_LIST_ORDERED_MARKERS = [
  'alpha', // list-alpha
  'decimal', // list-decimal
  'greek', // list-greek
  'latin', // list-latin
  'upper-latin', // list-upper-latin
  'roman', // list-roman
  'upper-roman', // list-upper-roman
]

export const WUI_LIST_MARKERS = [
  'none', // list-none
  'circle', // list-circle
  'disc', // list-disc
  'square', // list-square
  ...WUI_LIST_ORDERED_MARKERS,
]

export const WUI_LIST_MARKER_DEFAULT = 'none'
