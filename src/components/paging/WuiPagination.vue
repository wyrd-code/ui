<template>
  <div class="flex items-center justify-between">
    <div class="flex">
      <div :class="summaryClass">
        Prikaži
        <input
          v-model="customTake"
          class="w-12 ml-1"
          :class="inputClass"
          name="paging-take"
          @keyup.enter="changeTake"
        />
      </div>
    </div>
    <div class="flex -space-x-1px">
      <Component
        :is="currentPage > 1 ? `router-link` : `span`"
        :to="{ query: routeQueryWithoutPage }"
        :class="[
          currentPage > 1 ? linkClass : spanClass,
          { 'is-disabled': currentPage === 1 },
        ]"
        aria-label="idi na stranicu 1"
        data-qa="link na prvu stranicu"
      >
        <div class="icon-ph-caret-left-light" :class="iconClass" />
      </Component>
      <Component
        :is="currentPage > 1 ? `router-link` : `span`"
        :to="{ query: { ...routeQueryWithoutPage, page: previousPage } }"
        :class="[
          currentPage > 1 ? linkClass : spanClass,
          { 'is-disabled': currentPage === 1 },
        ]"
        :aria-label="`idi na stranicu ${previousPage}`"
        data-qa="link na prethodnu stranicu"
      >
        <div class="icon-ph-caret-left-light" :class="iconClass" />
      </Component>
      <div :class="summaryClass">
        {{ currentPage }}
        of
        {{ pageCount }}
      </div>
      <Component
        :is="currentPage < pageCount ? `router-link` : `span`"
        :to="{ query: { ...routeQueryWithoutPage, page: nextPage } }"
        :class="[
          currentPage < pageCount ? linkClass : spanClass,
          { 'is-disabled': currentPage === pageCount },
        ]"
        :aria-label="`idi na stranicu ${nextPage}`"
        data-qa="link na slijedeću stranicu"
      >
        <div class="icon-ph-caret-right-light" :class="iconClass" />
      </Component>
      <Component
        :is="currentPage < pageCount ? `router-link` : `span`"
        :to="{ query: { ...routeQueryWithoutPage, page: pageCount } }"
        :class="[
          currentPage < pageCount ? linkClass : spanClass,
          { 'is-disabled': currentPage === pageCount },
        ]"
        :aria-label="`idi na stranicu ${pageCount}`"
        data-qa="link na posljednju stranicu"
      >
        <div class="icon-ph-caret-right-light" :class="iconClass" />
      </Component>
    </div>
    <div :class="summaryClass">
      Skoči na stranicu
      <input
        v-model="customPage"
        class="w-12 ml-1"
        :class="inputClass"
        name="paging-jump"
        @keyup.enter="changePage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { PagingMeta } from '../../ui.types'

export default defineComponent({
  name: `WuiPagination`,
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    routeQuery: {
      type: Object,
      default: () => ({}),
    },
    pagingMeta: {
      type: Object as () => PagingMeta,
      default: () => ({}),
    },
    linkClass: {
      type: String,
      default:
        'bg-white rounded p-2 border border-gray-200 hover:border-primary-300',
    },
    summaryClass: {
      type: String,
      default:
        'bg-white rounded py-2 px-4 border border-gray-200 cursor-default',
    },
    spanClass: {
      type: String,
      default: 'bg-white rounded p-2 border border-gray-200 cursor-default',
    },
    iconClass: {
      type: String,
      default: 'w-5 h-5',
    },
    inputClass: {
      type: String,
      default: 'rounded-sm border border-gray-300 px-2',
    },
  },
  data: () => ({
    customPage: undefined,
    customTake: 0,
  }),
  computed: {
    pageCount() {
      return Math.round(this.pagingMeta.totalCount / this.pagingMeta.take)
    },
    currentPage() {
      const page = this.routeQuery.page || 1
      return parseInt(page, 10)
    },
    routeQueryWithoutPage() {
      const query = { ...this.routeQuery }
      delete query.page
      return query
    },
    previousPage() {
      const previousPage = this.currentPage - 1
      return previousPage > 1 ? previousPage : undefined
    },
    nextPage() {
      return this.currentPage + 1
    },
  },
  watch: {
    pagingMeta: {
      immediate: true,
      handler(pagingMeta) {
        this.customTake = pagingMeta.take
      },
    },
  },
  methods: {
    changePage() {
      let page = this.customPage as unknown as number
      if (!page || page < 1) {
        return
      }
      if (page > this.pageCount) {
        page = 100
      }

      this.updateQuery({ page })
    },
    changeTake() {
      let take = this.customTake
      if (!take || take < 1) {
        return
      }
      if (take > 100) {
        take = 100
      }

      this.updateQuery({ take })
    },
    updateQuery(params: Record<string, any>) {
      const router = useRouter()
      const route = useRoute()

      router.replace({
        query: {
          ...route.query,
          ...params,
        },
      })
    },
  },
})
</script>
