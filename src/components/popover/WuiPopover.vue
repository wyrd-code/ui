<template>
  <VDropdown
    :distance="distance"
    :placement="placement"
    v-bind="$attrs"
    theme="wuipopover"
  >
    <slot />

    <template #popper="{ toggle }">
      <slot name="content" :close="toggle" :toggle="toggle" />
    </template>
  </VDropdown>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  placement: {
    type: String,
    default: 'auto',
  },
  distance: {
    type: Number,
    default: 6,
  },
})
</script>

<style lang="css">
@import url('./popover.css');
</style>
