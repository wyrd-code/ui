<template>
  <li :class="classNames" v-bind="wrapperAttributes">
    <component
      :is="tagComputed"
      v-if="isLinkTag"
      v-bind="itemAttributes"
      :role="role"
    >
      <WuiListItemContent :data="data">
        <template v-for="(_, slot) of $slots" #[slot]="scope">
          <slot :name="slot" v-bind="scope" />
        </template>
      </WuiListItemContent>
    </component>
    <WuiListItemContent v-else :data="data">
      <template v-for="(_, slot) of $slots" #[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </WuiListItemContent>
    <WuiList v-if="children" v-bind="children" />
  </li>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'

import { routerLinkProps, useRouterLink } from '@/composables'

import type { WyrdListItem } from './list'
import WuiListItemContent from './WuiListItemContent.vue'

const props = defineProps({
  ...routerLinkProps,
  tag: { type: String, default: 'div' },
  role: { type: String, default: null },
  item: {
    type: [Object, String] as PropType<WyrdListItem | string>,
    required: true,
  },
})

const ensureObjectItem = (item?: WyrdListItem | string): WyrdListItem =>
  typeof item === 'string' ? { label: item } : item || ({} as WyrdListItem)

const data = computed(() => ensureObjectItem(props.item))

const { tagComputed, isLinkTag, linkAttributesComputed } = useRouterLink(
  data.value
)

const children = computed(() => {
  const items = data.value.children
  return Array.isArray(items) ? { items } : items
})

const classNames = computed(() => ({
  'wui-list-item--disabled': data.value.disabled,
  [data.value.class || '']: true,
}))

const wrapperAttributes = computed(() => {
  const attrs = {}
  if (props.role) {
    Object.assign(attrs, {
      role: 'presentation',
    })
  }
  return attrs
})

const itemAttributes = computed(() => {
  const attrs = { ...linkAttributesComputed.value }
  if (props.role === 'menuitem') {
    Object.assign(attrs, {
      tabindex: '0',
    })
  }
  return attrs
})
</script>
