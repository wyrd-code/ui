<template>
  <WuiList
    divided
    rounded
    bordered
    :items="items"
  />
</template>

<script lang="ts" setup>
import type { WyrdListItem } from '../list'

const items: WyrdListItem[] = [
  {
    to: '/components/nav/nav.html',
    label: 'VueRouter',
    description: 'VueRouter link',
  },
  {
    href: '#nested',
    label: 'Nested',
    description: 'Relative href link',
  },
  {
    href: 'https://vuejs.org',
    label: 'Vuejs.org',
    description: 'Absolute href link',
  },
  {
    href: 'https://vuejs.org',
    label: 'Vuejs.org',
    description: 'A disabled href link',
    disabled: true,
  },
]
</script>
