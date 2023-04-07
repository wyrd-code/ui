<template>
  <span
    :class="{
      active: isChecked,
    }"
  >
    <label :for="id">
      <input :id="id" type="checkbox" :checked="isChecked" @change="toggle" />
      <span class="toggle-track" />
    </label>
    <span @click="toggle" @keyup.space="toggle">
      <slot />
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useHtmlId } from '@/composables'

export default defineComponent({
  props: {
    value: { type: [Boolean, Number], default: 0 },
    id: { type: String, default: useHtmlId },
  },
  emits: ['changed'],
  setup(props, { emit }) {
    const isChecked = computed(() => !!props.value)

    // Note: we are working with 0 and 1 not Bool
    const toggle = () => emit('changed', isChecked.value ? 0 : 1)

    return {
      toggle,
      isChecked,
    }
  },
})
</script>
