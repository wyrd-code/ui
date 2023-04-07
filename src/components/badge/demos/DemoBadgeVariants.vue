<template>
  <div class="grid grid-cols-4 gap-4">
    <WuiBadge
      v-for="variant in WUI_BADGE_VARIANTS"
      :key="variant"
      :variant="variant"
      dot
    >
      <WuiButton stretch="full">
        {{ variant }}
      </WuiButton>
    </WuiBadge>
  </div>
</template>

<script lang="ts" setup>
import { WUI_BADGE_VARIANTS } from '../badge'
</script>
