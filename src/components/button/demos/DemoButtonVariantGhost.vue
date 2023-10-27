<template>
  <WuiCodeDemoRow
    v-for="variant in WUI_BUTTON_VARIANTS"
    :key="variant"
  >
    <WuiButton
      :variant="variant"
      ghost
    >
      {{ variant }}
    </WuiButton>
    <WuiButton
      :variant="variant"
      ghost
      loading
    >
      {{ variant }}
    </WuiButton>
    <WuiButton
      :variant="variant"
      ghost
      disabled
    >
      {{ variant }}
    </WuiButton>
  </WuiCodeDemoRow>
</template>

<script lang="ts" setup>
import { WUI_BUTTON_VARIANTS } from '../button'
</script>
