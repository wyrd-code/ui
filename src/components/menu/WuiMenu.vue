<template>
  <WuiList class="wui-menu" role="menu">
    <WuiMenuItem
      v-for="(item, idx) in items.map(ensureObjectItem)"
      :key="idx"
      :item="item"
      :show-children="showChildren"
      @selected="onSelected"
    />
  </WuiList>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

import { WyrdMenuItems, ensureObjectItem } from './menu'

const props = defineProps({
  showChildren: { type: Boolean, default: true },
  test: { type: String, default: 'A' },
  items: {
    type: Array as () => WyrdMenuItems,
    default: () => [],
  },
  handleSelection: {
    type: Function as PropType<(...args: any) => void>,
    default: (...args: any) => {},
  },
})

const emit = defineEmits(['focus', 'blur', 'selected'])

const onSelected = (value) => {
  // Standard event emit for normal component use
  emit('selected', value)
  // Advanced selection handling when used in slots (slots don't allow event handling)
  // More info https://github.com/vuejs/vue/issues/4332
  props.handleSelection(value)
}

// const { listeners, onItemFocused, onItemBlured, setItemRef } =
//   useFocusHandler<WyrdMenuItem>(emit)
</script>

<style lang="css" scoped>
@import url('menu.css');
</style>
