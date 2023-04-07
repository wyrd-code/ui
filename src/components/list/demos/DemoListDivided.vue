<template>
  <WuiList divided :items="items" />
</template>

<script lang="ts" setup>
import type { WyrdListItem } from 'wyrd-ui'

const items: WyrdListItem[] = [
  {
    label: 'Richard the Lionheart',
    description: '100 Smith st, London',
  },
  {
    label: 'Joan of Arc',
    description: '50 Loire st, Paris',
    disabled: true,
  },
  {
    label: 'Robin Hood',
    description: 'The forrest, Nottingham',
  },
]
</script>
