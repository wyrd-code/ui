<template>
  <VTooltip class="wui-tooltip">
    <slot />

    <template #popper>
      <slot name="content">{{ content }}</slot>
    </template>
  </VTooltip>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  content: {
    type: [String, Number],
    default: null,
  },
  disabled: Boolean,
  hoverable: Boolean,
  permanent: Boolean,
  autoposition: { type: Boolean, default: true },
})
</script>

<style lang="css" scoped>
@import url('tooltip.css');
</style>
