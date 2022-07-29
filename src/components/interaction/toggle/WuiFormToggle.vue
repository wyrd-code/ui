<template>
  <span
    :class="{
      active: isChecked,
    }"
  >
    <label>
      <input type="checkbox" :checked="isChecked" @change="toggle" />
      <span class="toggle-track" />
    </label>
    <span @click="toggle">
      <slot />
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    value: {
      default: 0,
      type: [Boolean, Number],
    },
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
