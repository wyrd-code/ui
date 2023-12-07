<template>
  <WuiNav :items="items" horizontal />
</template>

<script lang="ts" setup>
import WuiNav from '../WuiNav.vue'

const items = [
  {
    href: '/components/alert/alert.html',
    label: 'Alert',
  },
  {
    href: '/components/badge/badge.html',
    label: 'Badge',
  },
  {
    href: '/components/button/button.html',
    label: 'Button',
  },
]
</script>
