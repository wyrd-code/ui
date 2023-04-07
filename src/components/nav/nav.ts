import type { RouterLinkProps } from '@/domain'

export interface WyrdNavItemBase extends Partial<RouterLinkProps> {
  label: string
  icon?: string
  iconClass?: string
  image?: string
  description?: string
  class?: string
  role?: 'listitem' | 'menuitem' | 'group'
  children?: Array<WyrdNavItem>
}

// export interface WyrdNavItemGroup {
//   role: 'group'
//   label: string
//   children: Array<WyrdNavItem>
// }

export interface WyrdNavItemSeparator {
  role: 'separator'
}

export type WyrdNavItem = WyrdNavItemBase | WyrdNavItemSeparator
// | WyrdNavItemGroup

export type WyrdNav = {
  items: Array<WyrdNavItem>
  [x: string]: unknown
}
