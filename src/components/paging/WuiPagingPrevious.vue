<template>
  <WuiPagingLink
    :label="label"
    :value="state.page - 1"
    :disabled="state.page <= 1"
  >
    <slot />
  </WuiPagingLink>
</template>

<script lang="ts" setup>
import { injectPaging } from './paging'

const { state } = injectPaging()

defineProps({
  label: {
    type: String,
    default: 'Previous',
  },
})
</script>
