<template>
  <div class="wui-palette-editor-category-variant">
    <h4 v-if="variant" class="wui-palette-editor-category-variant-header">
      {{ variant }}
    </h4>
    <div class="flex space-x-1" :class="variant">
      <WuiPaletteColor
        v-for="color in colors"
        :key="`color-${color.key}`"
        :color="color"
        :theme="theme"
        :variant="variant"
        @save="(...args) => $emit('save', ...args)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

import type { WuiColorDefinition, WuiTheme } from '@/themes'

defineEmits(['save'])

defineProps({
  category: {
    type: String,
    required: true,
  },
  theme: {
    type: Object as PropType<WuiTheme>,
    required: true,
  },
  variant: {
    type: [String, Boolean] as PropType<'light' | 'dark' | false>,
    default: false,
  },
  colors: {
    type: Array as PropType<WuiColorDefinition[]>,
    required: true,
  },
})
</script>

<style lang="css">
.wui-palette-editor-category-variant-header {
  @apply bg-black py-2 font-bold text-center mb-1;
}
</style>
