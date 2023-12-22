<template>
  <WuiCodeDemoRow>
    <WuiButton v-for="size in WUI_BUTTON_SIZES" :key="size" :size="size" icon>
      <span class="icon-ph-heart" />
    </WuiButton>
  </WuiCodeDemoRow>

  <WuiCodeDemoRow>
    <WuiButton
      v-for="size in WUI_BUTTON_SIZES"
      :key="size"
      :size="size"
      icon
      variant="primary"
      shape="round"
    >
      <span class="icon-ph-heart" />
    </WuiButton>
  </WuiCodeDemoRow>

  <WuiCodeDemoRow>
    <WuiButton>
      <template #iconPrefix>
        <span class="icon-ph-heart" />
      </template>
      Prefix Icon
    </WuiButton>
    <WuiButton>
      <template #iconSuffix>
        <span class="icon-ph-heart" />
      </template>
      Suffix Icon
    </WuiButton>
  </WuiCodeDemoRow>
</template>

<script lang="ts" setup>
import { WUI_BUTTON_SIZES } from '../button'
</script>
