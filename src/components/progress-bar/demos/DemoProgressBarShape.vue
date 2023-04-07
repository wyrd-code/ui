<template>
  <WuiProgressBar
    v-for="(shape, idx) in WUI_PROGRESS_BAR_SHAPES"
    :key="shape"
    :shape="shape"
    :percentage="40 + idx * 10"
    :label="shape"
  />
</template>

<script lang="ts" setup>
import { WUI_PROGRESS_BAR_SHAPES } from '@/components/progress-bar/progress-bar'
</script>
