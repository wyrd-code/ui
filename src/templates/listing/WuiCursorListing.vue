<template>
  <div v-if="isLoading && !data.length">
    <CardSkeleton
      v-for="i in meta.paging.take"
      :key="`skeleton-${i}`"
      class="filter grayscale"
    />
  </div>
  <WuiFormError v-else-if="isError" :errors="error" />
  <div v-else-if="!data.length">
    <slot name="nocontent">
      <WuiAlert> Nema sadržaja. </WuiAlert>
    </slot>
  </div>
  <div v-else>
    <WuiLoadMore
      class="mb-4"
      :paging-meta="meta.paging"
      :is-loading="isLoading"
      :sync-route="syncRoute"
      :reverted="true"
      @load="onParamsChange"
    />

    <slot :data="data" :load="load" />

    <WuiLoadMore
      v-if="data.length < meta.paging.totalCount"
      class="mt-4"
      :paging-meta="meta.paging"
      :is-loading="isLoading"
      :sync-route="syncRoute"
      @load="onParamsChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'WuiCursorListing',
  props: {
    syncRoute: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default: () => [],
    },
    meta: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Object,
      default: null,
    },
    status: {
      type: String,
      required: true,
    },
  },
  emits: ['load'],
  setup(props, { emit }) {
    const params = ref<Record<string, unknown>>({})

    const onParamsChange = (value: Record<string, unknown>) => {
      params.value = value
      load()
    }

    const load = () => {
      emit('load', params.value)
    }

    return {
      onParamsChange,
      load,
    }
  },
})
</script>
