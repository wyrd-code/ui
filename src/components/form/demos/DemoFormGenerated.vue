<template>
  <WuiForm
    v-model="data"
    :on-submit="onSubmit"
  >
    <WuiFormSchema :schema="schema" />
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
  remember: false,
})

const onSubmit = (formData: any) => {
  alert(JSON.stringify(formData))
}

const schema: FormSchema = [
  {
    component: 'WuiFormText',
    props: {
      name: 'email',
      label: 'Your email',
      placeholder: 'your@email.address',
      autocomplete: 'email',
    },
    attributes: {
    },
  },
  {
    component: 'WuiFormPassword',
    props: {
      name: 'password',
      label: 'Password',
      autocomplete: 'current-password',
    },
    attributes: {
    },
  },
  {
    component: 'WuiFormCheckbox',
    props: {
      name: 'remember',
      label: 'Remember me',
    },
  },
  {
    component: 'WuiButtonGroup',
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
]
</script>
