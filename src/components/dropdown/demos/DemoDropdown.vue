<template>
  <WuiDropdown
    :items="languages"
    class="bg-neutral-1 shadow-lg"
    rounded
    bordered
  >
    <template #trigger>
      <WuiButton
        size="sm"
        variant="secondary"
        ghost
      >
        <span>Click me </span>
        <span class="icon-ph-caret-down ml-2 text-lg" />
      </WuiButton>
    </template>
  </WuiDropdown>
</template>

<script lang="ts" setup>
import type { WyrdListItem } from '@/components/list'

const languages: WyrdListItem[] = [
  {
    href: '#en',
    label: 'English',
  },
  {
    href: '#de',
    label: 'German',
  },
  {
    href: '#es',
    label: 'Spanish',
  },
]
</script>
