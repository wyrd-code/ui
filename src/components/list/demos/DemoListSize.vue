<template>
  <WuiList
    v-for="size in WUI_LIST_SIZES"
    :key="size"
    :size="size"
    bordered
    divided
    rounded
    :items="items"
  />
</template>

<script lang="ts" setup>
import type { WyrdListItem } from 'wyrd-ui'

import { WUI_LIST_SIZES } from '../list'

const items: WyrdListItem[] = [
  {
    label: 'Richard the Lionheart',
    description: '100 Smith st, London',
  },
  {
    label: 'Joan of Arc',
    description: '50 Loire st, Paris',
  },
]
</script>
