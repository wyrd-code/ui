<template>
  <WuiBreadcrumbs>
    <WuiMenu
      as="ul"
      item-as="li"
      :items="items"
    />
  </WuiBreadcrumbs>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { useRoute } from 'vue-router'

import type { WyrdNavItem } from '@/domain'

import WuiBreadcrumbs from './WuiBreadcrumbs.vue'

const props = defineProps({
  homeRoute: {
    type: Object as PropType<WyrdNavItem>,
    default: null,
  },
})

const route = useRoute()
const matched = route.matched.filter((r) => r.name)

const matchedItems = computed<WyrdNavItem[]>(() =>
  matched.map((r) => {
    const label = (r.meta?.title as string) || (r.name as string)
    const to = r.name ? { name: r.name } : undefined

    return {
      label,
      to,
    }
  })
)
const items = computed<WyrdNavItem[]>(() =>
  props.homeRoute
    ? [props.homeRoute, ...matchedItems.value]
    : matchedItems.value
)
</script>
