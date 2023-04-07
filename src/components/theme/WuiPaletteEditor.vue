<template>
  <div class="wui-palette-editor">
    <WuiPaletteEditorCategory
      v-for="category in categories"
      :key="`cat-${category}`"
      :category="category"
      :theme="theme"
      @save="(...args) => $emit('save', ...args)"
    />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

// import { WUI_COLOR_SPEC } from '@/domain'
import type { WuiTheme } from '@/domain'

defineEmits(['save'])

defineProps({
  theme: {
    type: Object as PropType<WuiTheme>,
    required: true,
  },
})

// const categoriesList = Object.values(WUI_COLOR_SPEC).map((d) => d.category)
const categoriesList = []
const categories = [...new Set(categoriesList)]
</script>
