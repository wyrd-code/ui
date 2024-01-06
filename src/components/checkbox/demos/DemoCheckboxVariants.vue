<template>
  <div class="flex flex-col space-y-2">
    <div
      v-for="variant in WUI_CHECKBOX_VARIANTS"
      :key="variant"
    >
      <WuiCheckbox
        v-model="value"
        :variant="variant"
      >
        <template #label><span class="capitalize">{{ variant }}</span></template>
      </WuiCheckbox>
      <WuiCheckbox
        v-model="value"
        :variant="variant"
        disabled
      >
        <template #label><span class="capitalize">{{ variant }} disabled</span></template>
      </WuiCheckbox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { WUI_CHECKBOX_VARIANTS } from '../checkbox'

const value = ref(true)
</script>
