<template>
  <AuthSplitLayout>
    <AuthSignIn />

    <template #brand> Your logo here </template>
  </AuthSplitLayout>
</template>

<script lang="ts" setup>
import AuthSignIn from '@/templates/auth/forms/SignIn.vue'
import AuthSplitLayout from '@/templates/auth/layouts/AuthSplitLayout.vue'
</script>
