<template>
  <WuiButtonGroup
    v-model="mode"
    condensed
    :options="opts"
  />

  <WuiPaging
    v-model="value"
    :count="33"
  >
    <div class="flex w-full items-center justify-between p-4">
      <WuiPagingSummary :mode="mode" />
      <WuiPagingLinks
        condensed
      />
    </div>
  </WuiPaging>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { PagingSummaryMode } from '@/components/paging/paging'

const value = ref(1)
const mode = ref(PagingSummaryMode.Results)
const opts = Object.values(PagingSummaryMode)
</script>
