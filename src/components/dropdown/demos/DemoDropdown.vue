<template>
  <WuiDropdown class="">
    <WuiButton variant="primary">
      <span>Click me </span>
      <span class="icon-ph-caret-down ml-2 text-lg" />
    </WuiButton>

    <template #content="{ itemClass }">
      <WuiMenu :items="items" :class="itemClass" />
    </template>
  </WuiDropdown>
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

<style scoped>
.contacts {
  margin-right: 6px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 6px,
    rgba(50, 50, 93, 0.1) 0px 7px 14px, rgba(50, 50, 93, 0.05) 0px 0px 0px 1px;
}
</style>
