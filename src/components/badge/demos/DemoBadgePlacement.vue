<template>
  <WuiCodeDemoRow>
    <WuiBadge
      v-for="placement in WUI_BADGE_PLACEMENTS"
      :key="placement"
      :placement="placement"
      dot
    >
      <WuiButton block>
        {{ placement }}
      </WuiButton>
    </WuiBadge>
  </WuiCodeDemoRow>
</template>

<script lang="ts" setup>
import { WUI_BADGE_PLACEMENTS } from '../badge'
</script>
