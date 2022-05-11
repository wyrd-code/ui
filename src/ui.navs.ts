import type { WyrdNavItemDefinition } from '~/ui.types'

export const uiNavs: WyrdNavItemDefinition[] = [
  {
    to: { name: 'ui' },
    label: 'UI',
    icon: 'ph-presentation-light',
    nav: 'admin',
    sort: 990,
    meta: {
      auth: true,
    },
  },
]

export default uiNavs
