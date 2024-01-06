<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div
    class="form-field"
    :class="['error' ? !validation.isValid : '']"
  >
    <label
      v-if="label"
      v-bind="labelAttributes"
    >
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

    <slot
      :id="id"
      v-bind="$attrs"
    />

    <p
      v-if="help"
      class="text-sm"
    >
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
import { computed, PropType } from 'vue'

import { useHtmlId } from '@/composables'

import type { FormFieldValidation } from './form.types'
import WuiFormMessage from './WuiFormMessage.vue'

const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  usesHtmlControl: {
    type: Boolean,
    default: false,
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

const labelAttributes = computed(() => {
  const forAttributeName = props.usesHtmlControl ? 'htmlFor' : 'for'
  return {
    [forAttributeName]: props.id,
  }
})
</script>
