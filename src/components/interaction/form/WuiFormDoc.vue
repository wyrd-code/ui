<template>
  <div>
    <h1>Form</h1>

    <WuiCodeExample title="Schema generated Form">
      <p>
        This form is generated using a schema object. It supports detailed
        customization of the form layout by allowing html elements and
        attributes to be used in the schema.
      </p>
      <WuiForm :data="data" :on-submit="onSubmit" :on-success="onSuccess">
        <WuiFormGenerator :schema="schema" />
      </WuiForm>
    </WuiCodeExample>

    <WuiCodeExample title="Manual Form">
      <p>This form is created using regular form components.</p>
      <WuiForm :data="data" :on-submit="onSubmit" :on-success="onSuccess">
        <div class="space-y-4">
          <WuiFormText
            name="email"
            validates="required"
            placeholder="Your email address"
            label="Your email"
            help="write it carefully"
            prefix="manual"
          />
          <WuiFormCheckbox
            name="accepted"
            validates="required"
            label="Accept terms"
            sub-label="It's required"
          />
          <div class="space-x-4">
            <WuiFormSubmit type="primary" label="Send" />
            <WuiFormReset outline label="Reset" />
          </div>
        </div>
      </WuiForm>
    </WuiCodeExample>
  </div>
</template>

<script lang="ts" setup>
import {
  WuiFormCheckbox,
  WuiFormText,
  WuiFormSubmit,
  WuiFormReset,
} from './definitions'
import type { FormSchema } from './form.types'
import WuiForm from './WuiForm.vue'
import WuiFormGenerator from './WuiFormGenerator.vue'

const data = {
  email: '@',
}

const schema: FormSchema = [
  {
    type: 'div',
    attrs: {
      class: 'space-y-4',
    },
    children: [
      {
        type: 'text',
        name: 'email',
        // validate: 'required|email',
        attrs: {
          label: 'Your email',
          help: 'write it carefully',
          placeholder: 'an email',
          prefix: 'schema',
        },
      },
      {
        type: 'checkbox',
        name: 'accepted',
        // validate: 'required|accepted',
        attrs: {
          label: 'Do you accept?',
          subLabel: 'This is required for your own good',
          type: 'danger',
        },
      },
      {
        type: 'div',
        attrs: {
          class: 'space-x-4',
        },
        children: [
          {
            type: 'submit',
            attrs: {
              type: 'primary',
              label: 'Send it over',
            },
          },
          // {
          //   type: 'button',
          //   attrs: {
          //     type: 'submit',
          //     class: 'wui-button border border-red-300 p-4',
          //     innerHTML: ['Send it over'],
          //   },
          // },
          {
            type: 'reset',
            attrs: {
              outline: true,
              label: 'Reset',
            },
          },
        ],
      },
    ],
  },
]

const onSubmit = (data: any) => {
  console.log('Form Submit', data)
}

const onSuccess = (data: any) => {
  console.log('Form success', data)
}
</script>
