<template>
  <WuiForm
    v-model="data"
    :on-submit="onSubmit"
  >
    <WuiFormText
      name="email"
      placeholder="your@email.address"
      label="Email"
      autocomplete="email"
    />
    <WuiFormPassword
      name="password"
      label="Password"
      autocomplete="current-password"
    />
    <WuiFormCheckbox
      name="remember"
      label="Remember me"
    />

    <template #actions>
      <WuiButtonGroup>
        <WuiFormSubmit
          variant="primary"
          label="Send"
        />
        <WuiFormReset
          variant="danger"
          label="Reset"
        />
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
