<template>
  <WuiList class="wui-nav" role="menu">
    <slot v-if="$slots.default" />
    <WuiNavItem v-for="(item, idx) in items" :key="idx" :item="item" />
  </WuiList>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

import type { WyrdNavItem } from './nav'

defineProps({
  test: { type: String, default: 'A' },
  items: {
    type: Array as () => Array<WyrdNavItem>,
    default: () => [],
  },
  handleSelection: {
    type: Function as PropType<(...args: any) => void>,
    default: (...args: any) => {},
  },
})

defineEmits(['focus', 'blur', 'selected'])
</script>

<style lang="css" scoped>
@import url('nav.css');
</style>
