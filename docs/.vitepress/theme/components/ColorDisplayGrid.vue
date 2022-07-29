<template>
  <div class="color-display-grid">
    <div
      v-for="(item, idx) in items"
      :key="idx"
      class="color-display-item"
      :class="item.className"
    >
      <div :class="innerClassName">{{ item.label }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'

interface ColorDisplayItem {
  label: string
  className: string
  innerClassName?: string
}

defineProps({
  items: {
    type: Array as PropType<ColorDisplayItem[]>,
    default: () => [],
  },
  innerClassName: {
    type: String,
    default: 'text-white',
  },
})
</script>

<style lang="css" scoped>
.color-display-grid {
  @apply grid gap-2;
}
.color-display-item {
  @apply flex items-center justify-center p-6;
}
</style>
