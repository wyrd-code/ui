<template>
  <div class="wui-palette-editor-category">
    <h3 class="wui-palette-editor-category-header">{{ category }} colors</h3>
    <WuiPaletteEditorCategoryVariant
      v-if="!useDark"
      class="wui-palette-editor-category-variant"
      :colors="colors"
      :category="category"
      :theme="theme"
      @save="(...args) => $emit('save', ...args)"
    />
    <div v-else class="flex flex-col space-y-2">
      <WuiPaletteEditorCategoryVariant
        class="wui-palette-editor-category-variant"
        variant="light"
        :colors="colors"
        :category="category"
        :theme="theme"
        @save="(...args) => $emit('save', ...args)"
      />
      <WuiPaletteEditorCategoryVariant
        class="wui-palette-editor-category-variant"
        variant="dark"
        :category="category"
        :colors="colors"
        :theme="theme"
        @save="(...args) => $emit('save', ...args)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'

// import { WUI_COLOR_SPEC } from '@/domain'
import type { WuiTheme } from '@/domain'

const WUI_COLOR_SPEC = { x: { category: 'y' } } as any
const defs = Object.values(WUI_COLOR_SPEC)

const categorize = (category: string) =>
  defs.filter((def) => (def as any).category === category)

defineEmits(['save'])

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  dark: {
    type: Boolean,
    default: true,
  },
  theme: {
    type: Object as PropType<WuiTheme>,
    required: true,
  },
})

const colors = computed(() => categorize(props.category))

const useDark = computed(() => props.category !== 'basic')
</script>

<style lang="css">
.wui-palette-editor-category-header {
  @apply bg-black py-3 text-lg font-bold text-center mb-2;
}
.wui-palette-editor-category-variant {
  @apply flex-grow;
}
</style>
