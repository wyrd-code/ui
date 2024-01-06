import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import WuiPopover from './WuiPopover.vue'

describe.concurrent('Popover', () => {
  describe('Simple', () => {
    // let assertParams

    const wrapper = mount(WuiPopover, {
      slots: {
        trigger: `<template #trigger="{ attrs }"><button v-bind="attrs">Open Sesame!</button></template>`,
        content: 'Main Content',
      },
    })

    it('mounts', async () => {
      expect(wrapper.exists()).toBeTruthy()
      expect(wrapper.emitted('mounts')).toBeTruthy()
    })

    it('renders button within trigger slot', async () => {
      const button = wrapper.find('button')
      expect(button).toBeTruthy()
      expect(button.html()).toContain('Open Sesame!')
      expect(button.attributes('aria-haspopup')).toBeTruthy()
    })

    it('does not reveal content until triggered', async () => {
      expect(wrapper.html()).not.toContain('Main content')
    })

    it.skip('clicking the button reveals content', async () => {
      expect(wrapper.emitted('open:popper')).toBeFalsy()
      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).toBeTruthy()
      expect(wrapper.emitted('open:popper')).toHaveLength(1)
      expect(wrapper.html()).toContain('Main content')
    })
  })
})
