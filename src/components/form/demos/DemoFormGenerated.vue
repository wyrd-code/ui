<template>
  <WuiForm :data="data" :on-submit="onSubmit" :on-success="onSuccess">
    <WuiFormGenerator :schema="schema" />
  </WuiForm>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import type { FormSchema } from '../form.types'
import WuiForm from '../WuiForm.vue'
import WuiFormGenerator from '../WuiFormGenerator.vue'

const data = reactive({
  email: '@',
})

const onSubmit = (datas: any) => {
  console.log('Form Submit', datas)
}

const onSuccess = (datas: any) => {
  console.log('Form success', datas)
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
</script>
