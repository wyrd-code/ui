<template>
  <WuiCodeDemoRow v-for="variant in WUI_BUTTON_VARIANTS" :key="variant">
    <WuiButton :variant="variant" outlined>
      {{ variant }}
    </WuiButton>
    <WuiButton :variant="variant" outlined loading>
      {{ variant }}
    </WuiButton>
    <WuiButton :variant="variant" outlined disabled>
      {{ variant }}
    </WuiButton>
  </WuiCodeDemoRow>
</template>

<script lang="ts" setup>
import { WUI_BUTTON_VARIANTS } from '../button'
</script>
