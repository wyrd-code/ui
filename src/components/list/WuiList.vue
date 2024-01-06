<template>
  <component
    :is="tagComputed"
    class="wui-list"
    :class="classNames"
    :role="role"
  >
    <slot v-if="$slots.default" />
    <WuiListItems
      v-else
      :items="items"
      :item-role="itemRole"
    />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import {
  WUI_LIST_POSITION_DEFAULT,
  WUI_LIST_POSITIONS,
  WUI_LIST_ORDERED_MARKERS,
  WUI_LIST_MARKERS,
  WUI_LIST_MARKER_DEFAULT,
  WUI_LIST_SIZE_DEFAULT,
  WUI_LIST_SIZES,
  WyrdListItems,
} from './list'
import WuiListItems from './WuiListItems.vue'

const props = defineProps({
  role: { type: String, default: null },
  itemRole: { type: String, default: null },
  tag: { type: String, default: 'ul' },
  fit: { type: Boolean, default: false },
  bordered: { type: Boolean, default: false },
  rounded: { type: Boolean, default: false },
  divided: { type: Boolean, default: false },
  markerPosition: {
    type: String,
    default: WUI_LIST_POSITION_DEFAULT,
    validator: (value: string) => WUI_LIST_POSITIONS.includes(value),
  },
  size: {
    type: String,
    default: WUI_LIST_SIZE_DEFAULT,
    validator: (value: string) => WUI_LIST_SIZES.includes(value),
  },
  marker: {
    type: String,
    default: WUI_LIST_MARKER_DEFAULT,
    validator: (value: string) => WUI_LIST_MARKERS.includes(value),
  },
  items: {
    type: Array as () => WyrdListItems,
    default: () => [],
  },
})

const isOrdered = computed(() =>
  WUI_LIST_ORDERED_MARKERS.includes(props.marker)
)

const tagComputed = computed(() => {
  if (props.tag) {
    return props.tag
  }
  return isOrdered.value ? 'ol' : 'ul'
})

// const isRenderedAsList = computed(() =>
//   ['ol', 'ul'].includes(tagComputed.value)
// )

// const roleComputed = computed(() =>
//   isRenderedAsList.value ? null : props.role
// )

const classNames = computed(() => ({
  'wui-list--fit': props.fit,
  'wui-list--bordered': props.bordered,
  'wui-list--rounded': props.rounded,
  'wui-list--divided': props.divided,
  [`wui-list--${props.markerPosition}`]: props.markerPosition,
  [`wui-list--${props.size}`]: props.size,
  [`list-${props.marker}`]: props.marker,
}))
</script>

<style lang="css">
@import url('list.css');
</style>
