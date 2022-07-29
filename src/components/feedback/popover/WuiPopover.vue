<template>
  <WuiPopper v-bind="$attrs" arrow :placement="placement">
    <slot />
    <template #content="{ close }">
      <div>Popover content 🍿</div>
      <slot name="content" :close="close" />
    </template>
  </WuiPopper>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

import WuiPopper from './WuiPopper.vue'

defineProps({
  placement: {
    type: String,
    default: 'auto',
  },
})
</script>

<style lang="css">
/* @import url('./popover.css'); */
</style>
