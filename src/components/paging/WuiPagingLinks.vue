<template>
  <WuiButtonGroup class="wui-paging__links" aria-label="Pagination links">
    <WuiPagingFirst
      v-if="showFirstLast"
      v-bind="buttonPropsComputed"
      @click="() => onPageChange(1)"
    >
      <slot name="first" />
    </WuiPagingFirst>

    <WuiPagingPrevious
      v-if="showPrevNext"
      v-bind="buttonPropsComputed"
      @click="() => onPageChange(state.page - 1)"
    >
      <slot name="previous" />
    </WuiPagingPrevious>

    <template v-if="showNumbers">
      <WuiPagingLink
        v-for="n in getPages(delta)"
        :key="`page-${n}`"
        :label="n"
        :value="n"
        :active="state.page === n"
        v-bind="buttonPropsComputed"
        @click="() => onPageChange(n)"
      >
        <slot name="number" :label="n" value="n" />
      </WuiPagingLink>
    </template>

    <WuiPagingNext
      v-if="showPrevNext"
      v-bind="buttonPropsComputed"
      @click="() => onPageChange(state.page + 1)"
    >
      <slot name="next" />
    </WuiPagingNext>

    <WuiPagingLast
      v-if="showFirstLast"
      v-bind="buttonPropsComputed"
      @click="() => onPageChange(state.pages)"
    >
      <slot name="last" />
    </WuiPagingLast>
  </WuiButtonGroup>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { usePagingPropsLinks, injectPaging } from './paging'

defineProps({
  ...usePagingPropsLinks,
})

const { state, onPageChange, getPages } = injectPaging()

const buttonPropsComputed = computed(() => ({
  variant: 'neutral',
}))
</script>
