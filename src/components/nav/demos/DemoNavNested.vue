<template>
  <WuiNav :items="items" />
</template>

<script lang="ts" setup>
import WuiNav from '../WuiNav.vue'

const items = [
  {
    href: '/components/badge/badge.html',
    label: 'Badge',
  },
  {
    href: '/components/button/button.html',
    label: 'Button',
    children: [
      {
        href: '/components/button-group/button-group.html',
        label: 'Button Group',
      },
    ],
  },
]
</script>
