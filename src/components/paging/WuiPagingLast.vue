<template>
  <WuiPagingLink
    :label="label"
    :value="state.pages"
    :disabled="state.page >= state.pages"
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
    default: 'Last',
  },
})
</script>
