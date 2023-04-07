<template>
  <WuiNav :items="items" />
</template>

<script lang="ts" setup>
import WuiNav from '../WuiNav.vue'

const items = [
  {
    href: '#edit',
    label: 'Edit',
    icon: 'icon-ph-pencil-simple',
  },
  {
    href: '#duplicate',
    label: 'Duplicate',
    icon: 'icon-ph-copy',
  },
  {
    href: '#archive',
    label: 'Archive',
    icon: 'icon-ph-archive',
  },
]
</script>
