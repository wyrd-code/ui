<template>
  <AuthSplitLayout>
    <AuthSignIn />

    <template #brand>
      Your logo here
    </template>
  </AuthSplitLayout>
</template>

<script lang="ts" setup>
import AuthSplitLayout from '@/templates/auth/layouts/AuthSplitLayout.vue'
import AuthSignIn from '@/templates/auth/forms/SignIn.vue'
</script>
