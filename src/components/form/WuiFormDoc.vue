<template>
  <div>
    <h1>Form</h1>

    <WuiCodeExample title="Status">
      <WuiForm
        class="bg-white rounded-md shadow text-base w-full p-6"
        submit-text="Submit this form"
        :form="form"
      />
    </WuiCodeExample>
  </div>
</template>

<script lang="ts" setup>
import { FormFieldSchema, FormFieldType } from '~/ui.types'

import { formFactory } from './form.factory'
import WuiForm from './WuiForm.vue'

const schema: FormFieldSchema = [
  {
    type: 'div',
    customClass: '',
    children: [
      {
        type: FormFieldType.Text,
        customClass: 'bg-green-100',
        name: 'email',
        label: 'Email',
        validation: 'required,email',
      },
      {
        type: FormFieldType.Text,
        customClass: 'bg-green-100',
        name: 'name',
        label: 'Your name',
        validation: 'required',
      },
      {
        type: FormFieldType.Textarea,
        customClass: '',
        name: 'message',
        label: 'Your message',
        validation: 'required',
      },
    ],
  },
]

const form = formFactory({
  schema,
  defaultData: () => ({
    email: '@',
    name: '',
    message: '',
  }),
  onSubmitForm: (data) => {
    console.log('Form Submit', data)
  },
})
</script>
