<template>
  <ForgotPassword
    signInUrl="#signin"
    :on-submit="onSubmit"
  />
</template>

<script lang="ts" setup>
import ForgotPassword from '@/templates/auth/forms/ForgotPassword.vue'

const onSubmit = (formData: any) => {
  alert(JSON.stringify(formData))
}
</script>
