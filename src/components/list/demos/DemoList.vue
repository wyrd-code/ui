<template>
  <WuiList :items="items" />
</template>

<script lang="ts" setup>
import type { WyrdListItem } from 'wyrd-ui'

const items: WyrdListItem[] = [
  {
    label: 'Richard the Lionheart',
  },
  {
    label: 'Joan of Arc',
  },
  {
    label: 'Robin Hood',
  },
]
</script>
