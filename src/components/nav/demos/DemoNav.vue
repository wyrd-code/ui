<template>
  <WuiNav :items="items" />
</template>

<script lang="ts" setup>
const items = [
  {
    href: '/components/badge/badge.html',
    label: 'Badge',
  },
  {
    href: '/components/dialog/dialog.html',
    label: 'Dialog',
  },
  {
    href: '/components/nav/nav.html',
    label: 'Nav',
  },
  {
    href: '/components/drawer/drawer.html',
    label: 'Drawer',
  },
]
</script>
