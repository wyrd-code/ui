<template>
  <div class="grid grid-cols-4 gap-4">
    <WuiButton
      v-for="variant in WUI_BUTTON_VARIANTS"
      :key="variant"
      :variant="variant"
      >{{ variant }}</WuiButton
    >
  </div>
</template>

<script lang="ts" setup>
import { WUI_BUTTON_VARIANTS } from '../button'
</script>
