<template>
  <WuiBreadcrumbs>
    <WuiNav as="ul" item-as="li" :items="items" />
  </WuiBreadcrumbs>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import type { WyrdNavItem } from '../../ui.types'
import WuiNav from '../nav/WuiNav.vue'
import WuiBreadcrumbs from './WuiBreadcrumbs.vue'

const route = useRoute()
const matched = route.matched.filter((r) => r.name)

const items: WyrdNavItem[] = matched.map((r) => {
  const label = (r.meta?.title as string) || (r.name as string)
  const to = r.name ? { name: r.name } : undefined

  return {
    label,
    to,
  }
})
</script>
