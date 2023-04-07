<template>
  <WuiListItem
    v-for="(item, idx) in items"
    :key="idx"
    :item="item"
    :role="itemRole"
  />
</template>

<script lang="ts" setup>
import { WyrdListItems } from './list'
import WuiListItem from './WuiListItem.vue'

defineProps({
  itemRole: {
    type: String,
    default: null,
  },
  items: {
    type: Array as () => WyrdListItems,
    default: () => [],
  },
})
</script>
