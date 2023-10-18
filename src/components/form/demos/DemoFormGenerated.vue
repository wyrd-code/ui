<template>
  <WuiForm
    v-model="data"
    :on-submit="onSubmit"
    :on-success="onSuccess"
    :on-reset="onReset"
  >
    <WuiFormSchema :schema="schema" />

    <template #footer>
      <pre>
        {{ status }}
        {{ info }}
      </pre>
      <hr />
      <pre>
        {{ data }}
      </pre>
    </template>
  </WuiForm>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { FormSchema } from '../form.types'
import WuiForm from '../WuiForm.vue'
import WuiFormSchema from '../WuiFormSchema'

const data = ref({
  email: null,
  password: null,
})

const status = ref('')
const info = ref({})

const onSubmit = (formData: any) => {
  info.value = formData
  status.value = 'submitted'
}

const onSuccess = (formData: any) => {
  info.value = formData
  status.value = 'success'
}

const onReset = () => {
  info.value = {}
  status.value = ''
}

const schema: FormSchema = [
  {
    element: 'div',
    attributes: {
      class: 'space-y-4',
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
      // {
      //   element: 'WuiFormCheckbox',
      //   name: 'accepted',
      //   validates: 'required|true',
      //   props: {
      //     label: 'Do you accept?',
      //     subLabel: 'This is required for your own good',
      //     variant: 'danger',
      //   },
      // },
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
</script>
