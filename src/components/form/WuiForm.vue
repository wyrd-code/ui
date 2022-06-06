<template>
  <form class="text-base relative" novalidate @submit.prevent>
    <slot :form="form" />

    <template v-if="Array.isArray(form.schema) && form.schema.length">
      <TransitionGroup name="fade">
        <WuiFormField
          v-for="(fieldSchema, idx) in form.schema"
          :key="`form-field-${idx}`"
          class="space-y-4"
          :schema="fieldSchema"
          :form="form"
        />
      </TransitionGroup>
    </template>

    <WuiFormMessage
      v-for="(message, idx) in form.messages.value.filter((m) => !m.field)"
      :key="`form-message-${idx}`"
      :message="message"
    />

    <slot name="after" :form="form" />

    <slot name="controls" :form="form">
      <div class="border-t mt-6 pt-4">
        <slot
          name="button"
          :form="form"
          :submit-text="submitText"
          :submit-button-class="submitButtonClass"
        >
          <div class="space-x-4">
            <WuiButton
              :class="submitButtonClass"
              v-bind="submitButtonProps"
              :loading="form.isLoading.value"
              @click="onSubmit"
            >
              {{ submitText }}
            </WuiButton>
            <WuiPopover title="Sigurno?">
              <WuiButton :loading="form.isLoading.value" outline size="sm">
                {{ resetText }}
              </WuiButton>
              <template #content="{ close }">
                <div>
                  <p style="margin-bottom: 8px">
                    Reset will discard all changes. Are you sure?
                  </p>
                  <div style="display: flex; justify-content: flex-end">
                    <WuiButton size="sm" @click="close">
                      No, keep my changes
                    </WuiButton>
                    <WuiButton
                      class="ml-4"
                      size="sm"
                      type="danger"
                      @click="onReset"
                    >
                      Yes, reset
                    </WuiButton>
                  </div>
                </div>
              </template>
            </WuiPopover>
          </div>
        </slot>
      </div>
    </slot>

    <slot name="footer" :form="form" />
  </form>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

import type { FormController } from '../../ui.types'
import WuiButton from '../button/WuiButton.vue'
import WuiPopover from '../popover/WuiPopover.vue'
import WuiFormField from './WuiFormField.vue'
import WuiFormMessage from './WuiFormMessage.vue'

export default defineComponent({
  name: 'WuiForm',
  components: { WuiPopover, WuiFormField, WuiButton, WuiFormMessage },
  props: {
    form: {
      type: Object as () => FormController,
      required: true,
    },
    submitText: {
      type: String,
      default: 'submit',
    },
    resetText: {
      type: String,
      default: 'cancel',
    },
    submitButtonProps: {
      type: Object,
      default: () => ({
        type: 'primary',
      }),
    },
    submitButtonClass: {
      type: String,
      default: 'justify-center',
    },
  },
  emits: ['saved', 'submit', 'reset', 'failed'],
  setup(props, { emit }) {
    const { form } = toRefs(props)
    const onReset = () => {
      form.value.resetForm()
      emit('reset')
    }
    const onSubmit = () => {
      form.value.onSubmit()
      emit('submit')
    }
    return {
      onReset,
      onSubmit,
    }
  },
})
</script>
