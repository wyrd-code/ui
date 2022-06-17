<template>
  <WuiModal :model-value="open" @update:model-value="() => $emit('close')">
    <template #header>
      <h1>
        {{ title }}
      </h1>
    </template>
    <template #body>
      {{ description }}
    </template>
    <template #actions>
      <button
        v-if="loading"
        class="text-lg wui-btn"
        :class="`wui-btn-${submitType}`"
      >
        <WuiSpinner v-if="loading" class="h-6 animate-spin w-6" />
      </button>
      <button
        v-else
        class="text-lg wui-btn"
        :class="`wui-btn-${submitType}`"
        @click="onSubmit"
      >
        {{ submitMessage }}
      </button>

      <button
        v-if="cancelVisible"
        class="wui-btn"
        @click="() => $emit('close')"
      >
        {{ cancelMessage }}
      </button>
    </template>
  </WuiModal>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import WuiModal from '../modal/WuiModal.vue'
import WuiSpinner from '../spinner/WuiSpinner.vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  submitMessage: {
    type: String,
    default: null,
  },
  submitCallback: {
    type: Function,
    required: true,
  },
  submitType: {
    type: String,
    default: 'primary',
  },
  cancelVisible: {
    type: Boolean,
    default: true,
  },
  cancelMessage: {
    type: String,
    default: 'Odustani',
  },
})

const emit = defineEmits(['close'])
const loading = ref(false)

const onSubmit = async () => {
  if (loading.value) {
    return
  }

  loading.value = true
  await props.submitCallback()
  loading.value = false
  emit('close')
}
</script>
