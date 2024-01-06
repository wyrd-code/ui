<template>
  <WuiMenu :items="items">
    <template #trigger="{ attrs }">
      <WuiButton
        variant="neutral"
        v-bind="attrs"
      >
        <span>Click me </span>
        <span class="icon-ph-caret-down ml-2 text-lg" />
      </WuiButton>
    </template>
  </WuiMenu>
</template>

<script lang="ts" setup>
const items = [
  'Edit',
  'Duplicate',
  'Archive',
  'Move',
  'Share',
  'Add to favorites',
  'Delete',
]
</script>
