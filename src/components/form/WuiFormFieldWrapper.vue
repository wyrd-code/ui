<template>
  <div
    class="form-field"
    :class="[
      'error' ? !isValid : '',
      customClass,
    ]"
  >
    <label
      v-if="schema.label"
      class="label"
    >
      <span class="text">
        {{ schema.label }}
      </span>
      <span class="required">
        <icon-ph-asterisk
          v-if="isRequired"
          class="icon w-2 h-2 ml-2"
        />
      </span>
    </label>

    <slot />

    <p
      v-if="schema.help"
      class="text-sm"
    >
      {{ schema.help }}
    </p>

    <WuiFormMessage
      v-for="(message, idx) in messages"
      :key="`form-message-${idx}`"
      :message="message"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { FormField } from '~/ui.types';

import { wuiFormInputWrapperPropsBase } from './field.props'






export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<FormField>,
      required: true,
    },
    ...wuiFormInputWrapperPropsBase,
  }
})
</script>
