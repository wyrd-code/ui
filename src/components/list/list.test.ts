import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import WuiList from './WuiList.vue'

describe.concurrent('List', () => {
  describe('Simple', () => {
    const wrapper = mount(WuiList, {
      props: {
        items: [],
      },
    })

    it('mounts', async () => {
      expect(wrapper.exists()).toBeTruthy()
    })

    it('has a proper classname', async () => {
      expect(wrapper.classes()).toContain('wui-list')
    })
  })

  describe('Children', () => {
    const wrapper = mount(WuiList, {
      props: {
        items: [
          {
            label: 'Item A',
          },
        ],
      },
    })

    it('renders child element', async () => {
      expect(wrapper.html()).toContain('Item A')
    })
  })

  // describe('Wrapping html element', () => {
  //   it.todo('will be changed', async () => {})
  //   it.todo('can adjust marker position', async () => {})
  // })

  // describe('Markers', () => {
  //   it.todo('will display markers', async () => {})
  //   it.todo('can adjust marker position', async () => {})
  // })

  // describe('Dividers', () => {
  //   it.todo('will display dividers using slot', async () => {})
  //   it.todo('will render divider list items', async () => {})
  //   it.todo('will set divider role', async () => {})
  // })

  // describe('ARIA', () => {
  //   it.todo('will not set role if rendered as a list element', async () => {})
  //   it.todo('will set role if not rendered as a list element', async () => {})
  // })

  // expect(wrapper.text()).toContain('4 x 2 = 8')
  // expect(wrapper.html()).toMatchSnapshot()
  // await wrapper.get('button').trigger('click')

  // it('foo', () => {
  //   expect(1 + 1).toEqual(2)
  //   expect(true).to.be.true
  // })

  // it('bar', () => {
  //   assert.equal(Math.sqrt(4), 2)
  // })

  // it('snapshot', () => {
  //   expect({ foo: 'bar' }).toMatchSnapshot()
  // })
})
