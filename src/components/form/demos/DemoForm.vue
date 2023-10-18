<template>
  <WuiForm
    v-model="initialData"
    :on-submit="onSubmit"
    :on-success="onSuccess"
    :on-reset="onReset"
  >
    <WuiFormText
      name="email"
      validates="required"
      placeholder="your@email.address"
      label="Email"
      help="A standard email address field"
      prefix="test"
    />
    <WuiFormPassword
      name="password"
      validates="required"
      label="Password"
      help="A typical password field"
      v-model="initialData.password"
    />

    <template #footer>
      <WuiFormSubmit variant="primary" label="Send" />
      <WuiFormReset variant="danger" label="Reset" />
      <pre>
        {{ status }}
        {{ info }}
      </pre>
      <hr />
      <pre>
        {{ initialData }}
      </pre>
    </template>
  </WuiForm>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import WuiForm from '../WuiForm.vue'
import WuiFormText from '../WuiFormText.vue'
import WuiFormSubmit from '../WuiFormSubmit.vue'
import WuiFormPassword from '../WuiFormPassword.vue'

const initialData = ref({
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
</script>
