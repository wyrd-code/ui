<template>
  <div class="wui-tab-nav" :class="type">
    <WuiNav
      class="wui-tab-nav-items"
      :items="items"
      item-class="wui-tab-nav-item"
      link-class="wui-tab-nav-link"
      link-exact-active-class="wui-tab-nav-link-active"
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
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

import type { WyrdNavItem } from '../../ui.types'
import WuiNav from './WuiNav.vue'

defineProps({
  items: {
    type: Array as () => WyrdNavItem[],
    default: () => [],
  },
  type: {
    type: String,
    default: 'tabs',
    validator: (val: string) => ['tabs', 'pills'].includes(val),
  },
})
</script>

<style lang="css">
@import url('tab-nav.css');
</style>
