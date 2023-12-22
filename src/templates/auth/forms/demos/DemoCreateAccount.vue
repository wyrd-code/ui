<template>
  <CreateAccount
    forgot-password-url="#forgot"
    sign-up-url="#signup"
    :on-submit="onSubmit"
  />
</template>

<script lang="ts" setup>
import CreateAccount from '@/templates/auth/forms/CreateAccount.vue'

const onSubmit = (formData: any) => {
  alert(JSON.stringify(formData))
}
</script>
