<template>
  <slot />
</template>

<script lang="ts" setup>
import { usePagingProps, usePaging } from './paging'

const props = defineProps({
  ...usePagingProps,
})
const emit = defineEmits(['update:model-value'])
usePaging(props, emit)
</script>

<style scoped>
.wui-paging {
  @apply flex list-style-none;
}
</style>
