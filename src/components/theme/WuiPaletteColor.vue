<template>
  <div class="wui-palette-color">
    <div class="wui-palette-color-header">
      <strong>{{ color.key }}</strong>
    </div>
    {{ colorValue }}
    <!-- <template v-if="color.type === 'single'">
      <div class="wui-palette-color-single" :style="{ background: colorValue }">
        {{ colorValue }}
      </div>
    </template>
    <template v-else>
      <WuiPaletteColorSteps
        :color="color"
        :theme="theme"
        :variant="variant"
        @save="(...args) => $emit('save', ...args)"
      />
    </template> -->
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'

import type { WuiThemeOptions, WuiColorDefinition } from '@/domain'

defineEmits(['save'])

const props = defineProps({
  color: {
    type: Object as PropType<WuiColorDefinition>,
    required: true,
  },
  variant: {
    type: [String, Boolean] as PropType<'light' | 'dark' | false>,
    default: false,
  },
  theme: {
    type: Object as PropType<WuiThemeOptions>,
    required: true,
  },
})

const colorValue = computed(() => props.theme.colors[props.color.key])
</script>

<style lang="css">
.wui-palette-color {
  @apply w-full text-center flex flex-col;
}
.wui-palette-color-header {
  @apply bg-black py-3;
}
.wui-palette-color-single {
  @apply flex flex-grow justify-center items-center;
}
</style>
