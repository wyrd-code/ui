<template>
  <WuiButton
    v-if="
      isLoading &&
        ((reverted && pagingMeta.hasPreviousPage) ||
          (!reverted && pagingMeta.hasNextPage))
    "
    block
    class="text-center leading-none"
  >
    <span class="mx-auto inline-block">
      <WuiSpinner class="w-4 h-4" />
    </span>
  </WuiButton>
  <WuiButton
    v-else-if="!syncRoute && reverted && pagingMeta.hasPreviousPage"
    type="info"
    block
    outline
    class="text-center leading-none"
    @click="() => $emit('load', { before: pagingMeta.startCursor })"
  >
    Load previous
  </WuiButton>
  <WuiButton
    v-else-if="!syncRoute && !reverted && pagingMeta.hasNextPage"
    type="info"
    outline
    block
    class="text-center leading-none"
    @click="() => $emit('load', { after: pagingMeta.endCursor })"
  >
    Load next
  </WuiButton>
  <WuiButton
    v-else-if="reverted && pagingMeta.hasPreviousPage"
    block
    :link="{ query: { before: pagingMeta.startCursor } }"
  >
    Load previous
  </WuiButton>
  <WuiButton
    v-else-if="!reverted && pagingMeta.hasNextPage"
    block
    :link="{ query: { after: pagingMeta.endCursor } }"
  >
    Load next
  </WuiButton>
</template>

<script lang="ts" setup>
import { PagingMeta } from './paging'

defineProps({
  reverted: {
    type: Boolean,
    default: false,
  },
  syncRoute: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  pagingMeta: {
    type: Object as () => PagingMeta,
    default: () => ({}),
  },
})

defineEmits(['load'])
</script>
