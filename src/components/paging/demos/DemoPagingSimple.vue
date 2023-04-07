<template>
  <WuiPaging v-model="value" :count="33">
    <div class="flex w-full items-center justify-between p-4">
      <WuiPagingSummary :mode="mode" />
      <WuiPagingLinks :show-numbers="false" />
    </div>
  </WuiPaging>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { PagingSummaryMode } from '@/components/paging/paging'

const value = ref(1)
const mode = ref(PagingSummaryMode.Results)
</script>
