<template>
  <div class="flex flex-col space-y-2">
    <div v-for="size in WUI_CHECKBOX_SIZES" :key="size">
      <WuiSwitch v-model="value" :size="size">
        <template #label
          ><span class="capitalize">{{ size }}</span></template
        >
      </WuiSwitch>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { WUI_CHECKBOX_SIZES } from '../../checkbox/checkbox'

const value = ref(true)
</script>
