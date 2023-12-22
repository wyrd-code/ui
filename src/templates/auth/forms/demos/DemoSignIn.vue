<template>
  <SignIn
    forgot-password-url="#forgot"
    sign-up-url="#signup"
    :on-submit="onSubmit"
  />
</template>

<script lang="ts" setup>
import SignIn from '@/templates/auth/forms/SignIn.vue'

const onSubmit = (formData: any) => {
  alert(JSON.stringify(formData))
}
</script>
