<template>
  <WuiPopover
    class="wui-dropdown"
    :placement="placement"
  >
    <template #button="{ attrs }">
      <slot
        name="button"
        :attrs="attrs"
      />
    </template>

    <template #content="{ close }">
      <slot
        name="content"
        :close="close"
      >
        <WuiList
          v-bind="$attrs"
          :items="items"
        />
      </slot>
    </template>
  </WuiPopover>
</template>

<script lang="ts" setup>
import { PropType, defineOptions } from 'vue'

import { Placement } from '@/domain'

import type { WyrdListItem } from '../list'

defineOptions({
  inheritAttrs: false,
})

defineProps({
  placement: {
    type: String,
    default: Placement.Bottom,
    validator: (value: string) =>
      Object.values(Placement).includes(value as Placement),
  },
  items: {
    type: Array as PropType<WyrdListItem[]>,
    default: () => [],
  },
})
</script>

<style lang="css">
@import url('./dropdown.css');
</style>
