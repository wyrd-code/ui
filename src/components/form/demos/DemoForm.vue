<template>
  <WuiForm
    v-model="data"
    :on-submit="onSubmit"
  >
    <WuiFormText
      name="email"
      validates="required"
      placeholder="your@email.address"
      label="Email"
      v-model="data.email"
    />
    <WuiFormPassword
      name="password"
      validates="required"
      label="Password"
      v-model="data.password"
    />
    <WuiFormCheckbox
      name="remember"
      label="Remember me"
      v-model="data.remember"
    />

    <template #actions>
      <WuiButtonGroup>
        <WuiFormSubmit variant="primary" label="Send" />
        <WuiFormReset variant="danger" label="Reset" />
      </WuiButtonGroup>
    </template>
  </WuiForm>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref({
  email: null,
  password: null,
  remember: false,
})

const onSubmit = (formData: any) => {
  alert(JSON.stringify(formData))
}
</script>
