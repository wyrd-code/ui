<template>
  <WuiProgressBar
    v-for="(size, idx) in WUI_PROGRESS_BAR_SIZES"
    :key="size"
    :percentage="40 + idx * 10"
    :size="size"
    :label="size"
  />
</template>

<script lang="ts" setup>
import { WUI_PROGRESS_BAR_SIZES } from '@/components/progress-bar/progress-bar'
</script>
