<template>
  <CreateAccount
    forgotPasswordUrl="#forgot"
    signUpUrl="#signup"
    :on-submit="onSubmit"
  />
</template>

<script lang="ts" setup>
import CreateAccount from '@/templates/auth/forms/CreateAccount.vue'

const onSubmit = (formData: any) => {
  alert(JSON.stringify(formData))
}
</script>
