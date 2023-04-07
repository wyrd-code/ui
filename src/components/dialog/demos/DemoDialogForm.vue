<template>
  <WuiButton variant="primary" @click="toggleDialog">Sign up</WuiButton>

  <WuiDialog v-model="isDialogVisible">
    <template #header>
      <h2 class="text-2xl font-bold">Create an account</h2>
    </template>

    <template #actions>
      <WuiButton
        stretch="full"
        size="lg"
        variant="primary"
        :disabled="!hasAcceptedTerms"
        @click="toggleDialog"
      >
        Sign up
      </WuiButton>
    </template>

    <div class="flex flex-col space-y-2">
      <WuiInput
        label-top="Email"
        prefix-icon="email"
        type="email"
        placeholder="yourmail@gmail.com"
      />

      <div class="flex flex-row">
        <div class="flex-1">
          <WuiInput label-top="First Name" placeholder="John" />
        </div>
        <div class="flex-1">
          <WuiInput label-top="Second Name" placeholder="Doe" />
        </div>
      </div>

      <WuiInput
        label-top="Username"
        prefix-icon="account_circle"
        placeholder="Unique Username"
        autocomplete="false"
      />

      <WuiInput
        label-top="Password"
        prefix-icon="lock"
        type="password"
        placeholder="Must have at least 6 characters"
        autocomplete="false"
      />

      <WuiCheckbox
        v-model="hasAcceptedTerms"
        label="I agree to our Terms of Service"
      />
    </div>
  </WuiDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isDialogVisible = ref(false)
const hasAcceptedTerms = ref(false)

const toggleDialog = () => {
  isDialogVisible.value = !isDialogVisible.value
  hasAcceptedTerms.value = false
}
</script>
