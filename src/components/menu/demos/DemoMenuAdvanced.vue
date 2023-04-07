<template>
  <WuiMenu :items="items" :trap-focus="true">
    <template #button="{ attrs }">
      <WuiButton icon shape="round" v-bind="attrs">
        <span class="icon-ph-dots-three-vertical" />
      </WuiButton>
    </template>
  </WuiMenu>
</template>

<script lang="ts" setup>
const items = [
  {
    value: 'edit',
    label: 'Edit',
    icon: 'icon-ph-pencil-simple',
  },
  {
    value: 'Duplicate',
    label: 'Duplicate',
    icon: 'icon-ph-copy',
  },
  {
    role: 'separator',
  },
  {
    value: 'Archive',
    label: 'Archive',
    icon: 'icon-ph-archive',
    disabled: true,
  },
  {
    value: 'Move',
    label: 'Move',
    icon: 'icon-ph-arrow-square-out',
  },
  {
    role: 'separator',
  },
  {
    value: 'Share',
    label: 'Share',
    icon: 'icon-ph-share-network',
  },
  {
    value: 'Bookmark',
    label: 'Bookmark',
    icon: 'icon-ph-bookmark-simple',
  },
  {
    value: 'Delete',
    label: 'Delete',
    class: 'text-danger-10',
    iconClass: 'bg-danger-9 text-white rounded-full p-1 -ml-1',
    icon: 'icon-ph-trash-simple',
    description: 'Careful now',
  },
]
</script>
