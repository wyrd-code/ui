<template>
  <WuiCodeDemoRow>
    <WuiButton
      v-for="size in WUI_BUTTON_SIZES"
      :key="size"
      :size="size"
      variant="secondary"
    >
      {{ size }}
    </WuiButton>
  </WuiCodeDemoRow>
</template>

<script lang="ts" setup>
import { WUI_BUTTON_SIZES } from '../button'
</script>
