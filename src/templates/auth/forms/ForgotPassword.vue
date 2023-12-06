<template>
  <WuiForm
    class="space-y-4 p-8 min-w-md"
    :on-submit="onSubmit"
    v-model="data"
>
    <slot name="heading">
      <h2>
          {{ heading }}
      </h2>
    </slot>

    <WuiFormText
      name="email"
      placeholder="name@company.com"
      label="Email"
      v-model="data.email"
    />

    <WuiFormSubmit
      stretch="full"
      variant="primary"
    >
      <slot name="submit-label">
        {{ submitLabel  }}
      </slot>
    </WuiFormSubmit>

    <p>Remember your password? <a :href="signInUrl">Sign in here</a></p>
  </WuiForm>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  heading: {
    type: String,
    default: 'Forgot your password?',
  },
  submitLabel: {
    type: String,
    default: 'Reset password',
  },
  signInUrl: {
    type: String,
    default: null,
  },
  onSubmit: {
    type: Function,
    default: null,
  },
})

const data = ref({
  email: null,
})
</script>
