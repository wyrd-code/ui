<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="form-field" :class="['error' ? !validator.isValid : '']">
    <label v-if="label" :for="id" class="label">
      <span class="text">
        {{ label }}
      </span>
      <span class="required">
        <div
          v-if="validator.isRequired"
          class="icon w-2 h-2 ml-2 icon-ph-asterisk"
        />
      </span>
    </label>

    <slot :id="id" />

    <p v-if="help" class="text-sm">
      {{ help }}
    </p>

    <WuiFormMessage
      v-for="(message, idx) in validator.messages"
      :key="`form-message-${idx}`"
      :message="message"
    />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

import { useHtmlId } from '@/composables'

import type { FormFieldValidation } from './form.types'
import WuiFormMessage from './WuiFormMessage.vue'

defineProps({
  label: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: () => useHtmlId(),
  },
  help: {
    type: String,
    default: null,
  },
  validator: {
    type: Object as PropType<FormFieldValidation>,
    default: () => ({}),
  },
})
</script>
