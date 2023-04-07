<template>
  <div class="flex flex-col space-y-4">
    <div
      v-for="variant in WUI_TAG_VARIANTS"
      :key="variant"
      class="inline-flex space-x-2 justify-center"
    >
      <WuiTag :variant="variant" href="#test1">
        {{ variant }}
      </WuiTag>
      <WuiTag :variant="variant" filled href="#test">
        {{ variant }}
      </WuiTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WUI_TAG_VARIANTS } from '../tag'
</script>
