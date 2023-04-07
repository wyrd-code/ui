<template>
  <div>
    <div>namespace: {{ theme.namespace }}</div>
  </div>
  <div>
    <WuiButton type="primary">Load theme</WuiButton>
    <WuiButton>Save theme</WuiButton>
  </div>
  <WuiPaletteEditor :theme="theme" @save="save" />

  <h3>Current theme data</h3>
  <div class="overflow-y-scroll max-h-128 bg-black p-4">
    <pre>{{ theme }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { WUI_DEFAULT_THEME } from '@/themes/default'

const theme = { ...WUI_DEFAULT_THEME }

const save = (...args) => {
  console.log('Saving', ...args)
}
</script>
