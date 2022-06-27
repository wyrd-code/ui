<template>
  <div v-if="isLoading && !data.length">
    <WuiSpinner />
  </div>
  <WuiFormError v-else-if="isError" :errors="error" />
  <div v-else-if="!data.length">
    <slot name="nocontent">
      <WuiAlert title="No content found" />
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

import WuiAlert from '../alert/WuiAlert.vue'
import WuiFormError from '../form/WuiFormError.vue'
import WuiLoadMore from '../paging/WuiLoadMore.vue'
import WuiSpinner from '../spinner/WuiSpinner.vue'

export default defineComponent({
  name: 'WuiListing',
  components: { WuiSpinner, WuiLoadMore, WuiAlert, WuiFormError },
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
