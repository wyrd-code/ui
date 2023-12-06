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
    <WuiFormPassword
      name="password"
      label="Password"
      v-model="data.password"
    />
    <WuiFormPassword
      name="passwordConfirm"
      label="Confirm password"
      v-model="data.passwordConfirm"
    />
    <p class="flex items-center justify-between">
      <span>
        <WuiCheckbox
          name="terms"
          v-model="data.terms"
        >
          <template #label>
            I accept the <a :href="termsAndConditionsUrl">Terms and Conditions</a>
          </template>
        </WuiCheckbox>
      </span>
    </p>

    <WuiFormSubmit
      stretch="full"
      variant="primary"
    >
      <slot name="submit-label">
        {{ submitLabel  }}
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
