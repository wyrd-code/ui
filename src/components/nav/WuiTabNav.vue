<template>
  <WuiNav
    class="flex border-b border-neutral-300"
    :items="items"
    item-class="flex"
    link-class="px-4 py-2 -mr-1px hover:(underline)"
    link-exact-active-class="-mb-1px border-l border-t border-r border-neutral-300 bg-neutral-50 rounded-t"
  >
    <template v-if="$slots.before" #before>
      <slot name="before" />
    </template>
    <template v-if="$slots.beforeItems" #beforeItems>
      <slot name="beforeItems" />
    </template>
    <template v-if="$slots.default" #default>
      <slot name="default" />
    </template>
  </WuiNav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import type { WyrdNavItem } from '~/ui.types'

export default defineComponent({
  name: 'WuiTabNav',
  props: {
    items: {
      type: Array as () => WyrdNavItem[],
      default: () => [],
    },
  },
})
</script>
