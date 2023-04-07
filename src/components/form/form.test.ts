import { mount, createLocalVue } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import WuiButton from '../button/WuiButton.vue'
import WuiFormText from '../input/WuiFormText.vue'
import WuiForm from './WuiForm.vue'

describe.concurrent('List', () => {
  describe('Basic', () => {
    const wrapper = mount(WuiForm, {
      props: {
        onSubmit: () => {},
        onSuccess: () => {},
      },
      slots: {
        default: `Foo`,
      },
    })

    it('mounts', async () => {
      expect(wrapper.exists()).toBeTruthy()
    })

    it('has a proper classname', async () => {
      expect(wrapper.classes()).toContain('wui-form')
    })

    it('renders default slot', async () => {
      expect(wrapper.html()).toContain('Foo')
    })
  })

  describe('Input', () => {
    let data = {}

    const wrapper = mount(WuiForm, {
      props: {
        onSubmit: (formData: any) => (data = formData),
        onSuccess: () => {},
      },
      global: {
        components: {
          WuiFormText,
          WuiButton,
        },
      },
      slots: {
        default: `
          <WuiFormText
            name="foo"
            label="Foo"
          />
          <WuiButton
            type="primary"
            label="Submit"
          />
        `,
      },
    })

    it('renders text input', async () => {
      expect(wrapper.findComponent(WuiFormText).exists()).toBe(true)
    })

    // it('renders submit button', async () => {
    //   expect(buttonComponent).toBeTruthy()
    // })

    it('submits data correctly', async () => {
      expect(data).toEqual({})

      // const input = wrapper.findComponent(WuiFormText).vm.$emit('cstom')

      // await input.setValue('my@mail.com')
      // expect(input.element.value).toBe('my@mail.com')

      // expect(input.emitted().foo.length).toBe(2)

      // await button.trigger('click')

      expect(data).toEqual({})
    })
  })
})
