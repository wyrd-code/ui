<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="form-field" :class="['error' ? !validation.isValid : '']">
    <label v-if="label" :for="id" class="label">
      <span class="text">
        {{ label }}
      </span>
      <span class="required">
        <div
          v-if="validation.isRequired"
          class="icon w-2 h-2 ml-2 icon-ph-asterisk"
        />
      </span>
    </label>

    <slot :id="id" v-bind="$attrs"  />

    <p v-if="help" class="text-sm">
      {{ help }}
    </p>

    <WuiFormMessage
      v-for="(message, idx) in validation.messages"
      :key="`form-message-${idx}`"
      :message="message"
    />
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

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
  validation: {
    type: Object as PropType<FormFieldValidation>,
    default: () => ({}),
  },
})
</script>
