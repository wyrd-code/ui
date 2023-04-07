<template>
  <WuiForm
    :data="data"
    :on-submit="onSubmit"
    :on-success="onSuccess"
    :on-reset="onReset"
  >
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
    <div class="space-y-4">
      {{ status }}
      {{ info }}
    </div>
  </WuiForm>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import {
  WuiFormCheckbox,
  WuiFormText,
  WuiFormSubmit,
  WuiFormReset,
} from '../definitions'
import WuiForm from '../WuiForm.vue'

const data = reactive({
  email: '@',
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
