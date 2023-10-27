<template>
  <WuiButtonGroup class="wui-paging__links" aria-label="Pagination links">
    <WuiPagingFirst
      v-if="showFirstLast"
      v-bind="props"
      @click="() => onPageChange(1)"
    >
      <slot name="first" />
    </WuiPagingFirst>

    <WuiPagingPrevious
      v-if="showPrevNext"
      v-bind="props"
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
        v-bind="props"
        @click="() => onPageChange(n)"
      >
        <slot name="number" :label="n" value="n" />
      </WuiPagingLink>
    </template>

    <WuiPagingNext
      v-if="showPrevNext"
      v-bind="props"
      @click="() => onPageChange(state.page + 1)"
    >
      <slot name="next" />
    </WuiPagingNext>

    <WuiPagingLast
      v-if="showFirstLast"
      v-bind="props"
      @click="() => onPageChange(state.pages)"
    >
      <slot name="last" />
    </WuiPagingLast>
  </WuiButtonGroup>
</template>

<script lang="ts" setup>
import { usePagingPropsLinks, injectPaging } from './paging'

const props = defineProps({
  ...usePagingPropsLinks,
})

const { state, onPageChange, getPages } = injectPaging()
</script>
