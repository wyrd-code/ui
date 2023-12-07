<template>
  <WuiPopover class="wui-dropdown" :placement="placement">
    <template #button="{ attrs }">
      <slot name="button" :attrs="attrs" />
    </template>

    <template #content="{ close }">
      <slot name="content" :close="close">
        <WuiList
          v-bind="$attrs"
          :items="items"
        />
      </slot>
    </template>
  </WuiPopover>
</template>

<script lang="ts" setup>
import type { WyrdListItem } from '../list'
import type { PropType } from 'vue'

defineOptions({
  inheritAttrs: false,
})

defineProps({
  placement: {
    type: String,
    default: 'bottom',
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
