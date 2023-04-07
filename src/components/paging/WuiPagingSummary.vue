<template>
  <!-- eslint-disable vue/no-v-html -->
  <p
    class="wui-paging__summary"
    aria-label="Pagination summary"
    v-html="summary"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { injectPaging, PagingSummaryMode } from './paging'

const props = defineProps({
  mode: {
    type: String,
    default: PagingSummaryMode.Results,
    validator: (value) =>
      Object.values(PagingSummaryMode).includes(value as any),
  },
})

const { state } = injectPaging()

const summaryPages = computed(
  () => `
    Page
    <span class="font-medium">${state.value.page}</span>
    of
    <span class="font-medium">${state.value.pages}</span>
  `
)

const summaryFull = computed(
  () => `
    <span class="font-medium">${state.value.visibleCount}</span>
    results
    on page
    <span class="font-medium">${state.value.page}</span>
    of
    <span class="font-medium">${state.value.pages}</span>
  `
)

const summaryItems = computed(
  () => `
    Results
    <span class="font-medium">${state.value.visibleFrom}</span>
    to
    <span class="font-medium">${state.value.visibleTo}</span>
    of
    <span class="font-medium">${state.value.count}</span>
  `
)

const summary = computed(() => {
  switch (props.mode) {
    case PagingSummaryMode.Results:
      return summaryItems.value
    case PagingSummaryMode.Pages:
      return summaryPages.value
    case PagingSummaryMode.Combo:
      return summaryFull.value
    default:
      throw new Error(`Unknown PagingSummaryMode value: "${props.mode}" `)
  }
})
</script>

<style scoped>
.wui-paging__summary {
  @apply text-sm;
}
</style>
