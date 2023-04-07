<template>
  <WuiNav class="wui-tabs" :items="items" />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

import type { WyrdNavItem } from '../nav/nav'

defineProps({
  items: {
    type: Array as () => Array<WyrdNavItem>,
    default: () => [],
  },
})
</script>

<style lang="css" scoped>
@import url('tabs.css');
</style>
