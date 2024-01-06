<template>
  <WuiList
    divided
    bordered
    rounded
    :items="items"
  />
</template>

<script lang="ts" setup>
import type { WyrdListItem } from 'wyrd-ui'

const items: WyrdListItem[] = [
  {
    label: 'Richard the Lionheart',
    description: '100 Smith st, London',
    children: ['A', 'B', 'C'],
  },
  {
    label: 'Robin Hood',
    description: 'The forrest, Nottingham',
  },
]
</script>
