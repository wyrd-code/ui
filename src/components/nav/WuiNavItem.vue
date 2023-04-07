<template>
  <li
    v-if="isSeparator(item)"
    class="wui-nav-separator"
    role="separator"
    tabindex="-1"
  />
  <li v-else role="presentation" :class="{ group: isGroup(item) }">
    <WuiLink class="wui-nav-item" v-bind="linkProps">
      <slot name="icon" :item="item">
        <span
          v-if="item.icon"
          class="wui-nav-item-icon"
          :class="item.iconClass"
        >
          <span :class="item.icon" />
        </span>
      </slot>
      <span class="wui-nav-item-body">
        <slot name="label" :item="item">
          <span class="wui-nav-item-label">
            {{ item.label }}
          </span>
        </slot>
        <slot name="description" :item="item">
          <div v-if="item.description" class="wui-nav-item-description">
            {{ item.description }}
          </div>
        </slot>
      </span>
    </WuiLink>
    <WuiNav
      v-if="item.children && item.children.length"
      :items="item.children"
    />
  </li>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'

import { routerLinkProps } from '@/domain'
import { pick } from '@/utilities'

import type { WyrdNavItem, WyrdNavItemSeparator } from './nav'

const props = defineProps({
  item: {
    type: Object as PropType<WyrdNavItem>,
    required: true,
  },
})

const isSeparator = (item: WyrdNavItem): item is WyrdNavItemSeparator =>
  item.role === 'separator'

const isGroup = (item: WyrdNavItem) => item.role === 'group'

const linkProps = computed(() => pick(props.item, Object.keys(routerLinkProps)))

defineEmits(['focus', 'blur'])
</script>
