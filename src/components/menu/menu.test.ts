import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import WuList from '../list/WuiList.vue'
import WuiMenu from './WuiMenu.vue'

describe.concurrent('Menu', () => {
  describe('Simple', () => {
    const wrapper = mount(WuiMenu, {
      props: {
        items: [],
      },
      components: {
        WuList,
      },
    })

    it('mounts', async () => {
      expect(wrapper.exists()).toBeTruthy()
    })
  })

  describe.skip('Children', () => {
    const wrapper = mount(WuiMenu, {
      props: {
        items: [
          {
            label: 'Item A',
          },
        ],
      },
      components: {
        WuList,
      },
    })

    it('renders child element', async () => {
      expect(wrapper.html()).toContain('Item A')
    })
  })
})
