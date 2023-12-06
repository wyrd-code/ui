<template>
  <WuiForm
    class="space-y-4 p-8 min-w-md"
    v-model="data"
    :on-submit="onSubmit"
  >
    <slot name="heading">
      <h2>
          {{ heading }}
      </h2>
    </slot>

    <WuiFormText
      name="email"
      validates="required"
      placeholder="name@company.com"
      label="Email"
      v-model="data.email"
    />
    <WuiFormPassword
      name="password"
      validates="required"
      label="Password"
      v-model="data.password"
    />
    <p class="flex items-center justify-between">
      <WuiCheckbox
        name="remember"
        label="Remember me"
        v-model="data.remember"
      />
      <a :href="forgotPasswordUrl">Forgot your password?</a>
    </p>

    <WuiFormSubmit
      stretch="full"
      variant="primary"
    >
      <slot name="submit-label">
        {{ submitLabel  }}
      </slot>
    </WuiFormSubmit>

    <slot name="sign-up">
      <p v-if="signUpUrl">Don't have an account yet? <a :href="signUpUrl">Sign up</a></p>
    </slot>
  </WuiForm>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  heading: {
    type: String,
    default: 'Sign in',
  },
  submitLabel: {
    type: String,
    default: 'Sign in',
  },
  signUpUrl: {
    type: String,
    default: '#',
  },
  test: {
    type: String,
    default: '#',
  },
  forgotPasswordUrl: {
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
  password: null,
  remember: false,
})
</script>
