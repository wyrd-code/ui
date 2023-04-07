import type { PropType, ExtractPropTypes } from 'vue'

export const routerLinkProps = {
  tag: { type: String, default: 'span' },
  to: {
    type: [String, Object] as PropType<string | Record<string, any>>,
    default: '',
  },
  replace: { type: Boolean, default: false },
  append: { type: Boolean, default: false },
  exact: { type: Boolean, default: false },
  activeClass: { type: String, default: '' },
  exactActiveClass: { type: String, default: '' },
  href: { type: String, default: '' },
  target: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
}

export type RouterLinkProps = Partial<ExtractPropTypes<typeof routerLinkProps>>
