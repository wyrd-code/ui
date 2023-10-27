<template>
  <WuiPaging :count="17">
    <WuiPagingLinks
      v-for="variant in WUI_BUTTON_VARIANTS"
      :key="variant"
      :variant="variant"
      condensed
    />
    <WuiPagingLinks
      v-for="variant in WUI_BUTTON_VARIANTS"
      :key="variant"
      :variant="variant"
      outlined
    />
  </WuiPaging>
</template>

<script lang="ts" setup>
import { WUI_BUTTON_VARIANTS } from '@/components/button/button'
</script>
