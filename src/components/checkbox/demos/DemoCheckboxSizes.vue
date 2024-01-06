<template>
  <div class="flex flex-col space-y-2">
    <WuiCheckbox
      v-for="size in WUI_CHECKBOX_SIZES"
      :key="size"
      v-model="value"
      :size="size"
    >
      <template #label><span class="capitalize">{{ size }}</span></template>
    </WuiCheckbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { WUI_CHECKBOX_SIZES } from '../checkbox'

const value = ref(true)
</script>
