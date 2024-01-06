<template>
  <div class="flex flex-col space-y-4">
    <div
      v-for="shape in WUI_TAG_SHAPES"
      :key="shape"
      class="inline-flex space-x-2 justify-center"
    >
      <WuiTag
        variant="primary"
        :shape="shape"
      >
        {{ shape }}
      </WuiTag>
      <WuiTag
        variant="primary"
        filled
        :shape="shape"
      >
        {{ shape }}
      </WuiTag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WUI_TAG_SHAPES } from '../tag'
</script>
