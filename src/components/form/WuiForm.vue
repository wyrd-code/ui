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
                    Sigurno želiš odbaciti izmjene?
                  </p>
                  <div style="display: flex; justify-content: flex-end">
                    <WuiButton size="sm" @click="close"> Ups... </WuiButton>
                    <WuiButton
                      class="ml-4"
                      size="sm"
                      type="danger"
                      @click="onReset"
                    >
                      Nastavi
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

import type { WuiForm } from '~/ui.types'

import WuiPopover from '../popover/WuiPopover.vue'

export default defineComponent({
  components: { WuiPopover },
  props: {
    form: {
      type: Object as () => WuiForm,
      required: true,
    },
    submitText: {
      type: String,
      default: 'pošalji',
    },
    resetText: {
      type: String,
      default: 'poništi',
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
