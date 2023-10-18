import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ref, h } from 'vue'

import WuiFormText from './WuiFormText.vue'
import WuiFormSubmit from './WuiFormSubmit.vue'
import WuiFormReset from './WuiFormReset.vue'
import WuiForm from './WuiForm.vue'
import { FormPlugin } from './form.plugin'
import { FormSchema } from '@/components/form/form.types'
import WuiFormSchema from '@/components/form/WuiFormSchema'

describe.concurrent('Form', () => {
  describe('Minimal', () => {
    const wrapper = mount(WuiForm, {
      global: {
        plugins: [FormPlugin],
      },
      props: {
        onSubmit: () => {},
        onSuccess: () => {},
        onReset: () => {},
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

  describe('Static', () => {
    const oldEmailValue = 'henry@usedcars.com'
    const newEmailValue = 'sarah@newcars.com'

    let submittedData = null
    let data = ref({
      email: oldEmailValue,
    })

    const wrapper = mount(WuiForm, {
      global: {
        plugins: [FormPlugin],
      },
      props: {
        onSubmit: (formData: any) => submittedData = formData,
        onSuccess: () => {},
        onReset: () => {},
        modelValue: data,
        'onUpdate:modelValue': (formData: any) => {
          data.value = formData
        },
      },
      slots: {
        default: `
          <WuiFormText
            name="email"
            label="Email"
          />
          <WuiFormSubmit
            label="Submit"
          />
          <WuiFormReset
            label="Reset"
          />
        `,
      },
    })

    const textField = wrapper.findComponent(WuiFormText)
    const input = wrapper.get('[name="email"]')
    const submitButton = wrapper.findComponent(WuiFormSubmit)
    const resetButton = wrapper.findComponent(WuiFormReset)

    it('renders text input', async () => {
      expect(textField.exists()).toBe(true)
      expect(input).toBeTruthy()
    })

    it('renders submit button', async () => {
      expect(submitButton.exists()).toBe(true)
    })

    it('renders reset button', async () => {
      expect(resetButton.exists()).toBe(true)
    })

    it('updates form data when input value changes', async () => {
      // Establish initial state
      expect(data.value).toEqual({
        email: oldEmailValue,
      })

      // Change input value
      await input.setValue(newEmailValue)

      // Check form data reflects the changes
      expect(data.value).toEqual({
        email: newEmailValue,
      })
    })

    it('submits data correctly', async () => {
      // Establish initial state
      expect(submittedData).toBeNull()
      expect(data.value).toEqual({
        email: newEmailValue,
      })

      // Submit the form
      await submitButton.trigger('click')

      // Form data unchanged
      expect(data.value).toEqual({
        email: newEmailValue,
      })

      // Check onSubmit handler received correct form data
      expect(submittedData).toEqual({
        email: newEmailValue,
      })
    })
  })

  describe('Generated', () => {
    const oldEmailValue = 'henry@usedcars.com'
    const newEmailValue = 'sarah@newcars.com'
    const schema: FormSchema = [
      {
        element: 'div',
        attributes: {
          class: 'wrapper-division',
        },
        children: [
          {
            component: 'WuiFormText',
            props: {
              name: 'email',
              validates: 'required|email',
            },
            attributes: {
              label: 'Your email',
              placeholder: 'your@email.address',
              help: 'A standard email address field',
              prefix: 'test',
            },
          },
          {
            component: 'WuiFormPassword',
            props: {
              name: 'password',
              validates: 'required|password',
            },
            attributes: {
              label: 'Password',
              help: 'A typical password field',
            },
          },
          {
            component: 'WuiButtonGroup',
            attributes: {
              // class: 'space-x-4',
            },
            children: [
              {
                component: 'WuiFormSubmit',
                props: {
                  variant: 'primary',
                  label: 'Send',
                },
              },
              {
                component: 'WuiFormReset',
                props: {
                  variant: 'danger',
                  label: 'Reset',
                },
                attributes: {
                },
              },
            ],
          },
        ],
      },
    ]

    let submittedData = null
    let data = ref({
      email: oldEmailValue,
    })

    const wrapper = mount(WuiForm, {
      global: {
        plugins: [FormPlugin],
      },
      props: {
        onSubmit: (formData: any) => submittedData = formData,
        onSuccess: () => {},
        onReset: () => {},
        modelValue: data,
        'onUpdate:modelValue': (formData: any) => {
          data.value = formData
        },
      },
      slots: {
        default: h(WuiFormSchema, { schema }),
      },
    })

    const wrapperDivision = wrapper.get('.wrapper-division')
    const textField = wrapper.findComponent(WuiFormText)
    const input = wrapper.get('[name="email"]')
    const submitButton = wrapper.findComponent(WuiFormSubmit)
    const resetButton = wrapper.findComponent(WuiFormReset)

    it('renders wrapping html division', async () => {
      expect(wrapperDivision).toBeTruthy()
    })

    it('renders text input', async () => {
      expect(textField.exists()).toBe(true)
      expect(input).toBeTruthy()
    })

    it('renders submit button', async () => {
      expect(submitButton.exists()).toBe(true)
    })

    it('renders reset button', async () => {
      expect(resetButton.exists()).toBe(true)
    })

    it('updates form data when input value changes', async () => {
      // Establish initial state
      expect(data.value).toEqual({
        email: oldEmailValue,
      })

      // Change input value
      await input.setValue(newEmailValue)

      // Check form data reflects the changes
      expect(data.value).toEqual({
        email: newEmailValue,
      })
    })

    it('submits data correctly', async () => {
      // Establish initial state
      expect(submittedData).toBeNull()
      expect(data.value).toEqual({
        email: newEmailValue,
      })

      // Submit the form
      await submitButton.trigger('click')

      // Form data unchanged
      expect(data.value).toEqual({
        email: newEmailValue,
      })

      // Check onSubmit handler received correct form data
      expect(submittedData).toEqual({
        email: newEmailValue,
      })
    })
  })
})
