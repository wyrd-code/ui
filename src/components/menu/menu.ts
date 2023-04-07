export interface WyrdMenuItem {
  label: string
  icon?: string
  iconClass?: string
  image?: string
  description?: string
  class?: string
  role?: 'listitem' | 'menuitem' | 'separator' | 'group'
  value?: any
  children?: WyrdMenu
  disabled?: boolean
}

export interface WyrdMenuItemSeparator {
  role: 'separator'
}

export type WyrdMenuItems = Array<WyrdMenuItem | WyrdMenuItemSeparator | string>

export type WyrdMenu = {
  items: WyrdMenuItems
  [x: string]: unknown
}

export const ensureObjectItem = (
  item?: WyrdMenuItem | WyrdMenuItemSeparator | string
): WyrdMenuItem | WyrdMenuItemSeparator =>
  typeof item === 'string' ? { label: item } : item || ({} as WyrdMenuItem)
