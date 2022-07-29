<template>
  <WuiPopper v-bind="$attrs" arrow :placement="placement">
    <slot />
    <template #content="{ close }">
      <div>Tooltip content 🍿</div>
      <slot name="content" :close="close" />
    </template>
  </WuiPopper>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

import WuiPopper from '../../feedback/popover/WuiPopper.vue'

defineProps({
  placement: {
    type: String,
    default: 'auto',
  },
})
</script>

<style lang="css">
/* @import url('./tooltip.css'); */
</style>
