<template>
  <WuiForm
    v-model="data"
    class="space-y-4 p-8 min-w-md"
    :on-submit="onSubmit"
  >
    <slot name="heading">
      <h2>
        {{ heading }}
      </h2>
    </slot>

    <WuiFormText
      v-model="data.email"
      name="email"
      placeholder="name@company.com"
      label="Email"
    />
    <WuiFormPassword
      v-model="data.password"
      name="password"
      label="Password"
    />
    <WuiFormPassword
      v-model="data.passwordConfirm"
      name="passwordConfirm"
      label="Confirm password"
    />
    <p class="flex items-center justify-between">
      <span>
        <WuiCheckbox
          v-model="data.terms"
          name="terms"
        >
          <template #label>
            I accept the
            <a :href="termsAndConditionsUrl">Terms and Conditions</a>
          </template>
        </WuiCheckbox>
      </span>
    </p>

    <WuiFormSubmit
      stretch="full"
      variant="primary"
    >
      <slot name="submit-label">
        {{ submitLabel }}
      </slot>
    </WuiFormSubmit>

    <p>Already have an account? <a :href="signInUrl">Sign in here</a></p>
  </WuiForm>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  heading: {
    type: String,
    default: 'Create an account',
  },
  submitLabel: {
    type: String,
    default: 'Create an account',
  },
  signInUrl: {
    type: String,
    default: null,
  },
  termsAndConditionsUrl: {
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
  passwordConfirm: null,
  terms: false,
})
</script>
