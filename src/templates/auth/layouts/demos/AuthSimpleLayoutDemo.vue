<template>
  <AuthSimpleLayout>
    <AuthSignIn />

    <template #brand>
      <h3 class="font-bold text-lg">
        Your logo here
      </h3>
    </template>
  </AuthSimpleLayout>
</template>

<script lang="ts" setup>
import AuthSimpleLayout from '@/templates/auth/layouts/AuthSimpleLayout.vue'
import AuthSignIn from '@/templates/auth/forms/SignIn.vue'
</script>
