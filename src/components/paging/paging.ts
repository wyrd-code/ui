import { ExtractPropTypes, computed, ref, watch, inject, provide } from 'vue'

export enum PagingSummaryMode {
  Results = 'results',
  Pages = 'pages',
  Combo = 'combo',
}

export const WUI_PAGING_DEFAULT_PAGE = 1
export const WUI_PAGING_DEFAULT_DELTA = 0
export const WUI_PAGING_DEFAULT_COUNT = 0
export const WUI_PAGING_DEFAULT_PAGE_COUNT = 0
export const WUI_PAGING_DEFAULT_PAGE_SIZE = 10
export const WUI_PAGING_SEPARATOR = '...'

export const usePagingPropsPage = {
  page: { type: Number, default: () => WUI_PAGING_DEFAULT_PAGE },
}

export const usePagingPropsBase = {
  pageSize: { type: Number, default: () => WUI_PAGING_DEFAULT_PAGE_SIZE },
  count: { type: Number, default: WUI_PAGING_DEFAULT_COUNT },
  disabled: { type: Boolean, default: false },
}

export const usePagingPropsLinks = {
  delta: { type: Number, default: () => WUI_PAGING_DEFAULT_DELTA },
  showPrevNext: { type: Boolean, default: true },
  showFirstLast: { type: Boolean, default: false },
  showNumbers: { type: Boolean, default: true },
}

export const usePagingProps = {
  ...usePagingPropsBase,
  modelValue: { type: Number, default: () => WUI_PAGING_DEFAULT_PAGE },
}

export type PagingProps = Partial<ExtractPropTypes<typeof usePagingProps>>

export const usePaging = (
  props: PagingProps,
  emit?: (event: 'update:model-value', ...args: any[]) => void
) => {
  const currentPage = ref(props.modelValue || WUI_PAGING_DEFAULT_PAGE)

  const state = computed(() => {
    const count = props.count || WUI_PAGING_DEFAULT_COUNT
    const pageSize = props.pageSize || WUI_PAGING_DEFAULT_PAGE_SIZE

    return calculatePagination(count, pageSize, currentPage.value)
  })

  const onPageChange = (value: string | number) => {
    validatePageValue(value, state.value.pages)

    if (value === WUI_PAGING_SEPARATOR || value === currentPage.value) {
      return
    }
    emit && emit('update:model-value', value)
    currentPage.value = value as number
  }

  watch([computed(() => props.modelValue)], ([value]) => {
    if (currentPage.value !== value && Number.isInteger(value)) {
      currentPage.value = value as number
    }
  })

  const paging = Object.freeze({
    onPageChange,
    getPages: (delta) =>
      getVisiblePages(currentPage.value, state.value.pages, delta),
    state,
  })

  providePaging(paging)

  return paging
}

export type PagingComposable = ReturnType<typeof usePaging>

// Simple solution if you want the elements to always remain equal and not having your UI shift around:
// https://gist.github.com/kottenator/9d936eb3e4e3c3e02598?permalink_comment_id=4308268#gistcomment-4308268
const getRange = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, i) => start + i)
}

export const getVisiblePages = (
  currentPage: number,
  pageCount: number,
  delta: number
): number[] => {
  if (currentPage <= delta) {
    return getRange(1, Math.min(pageCount, delta * 2 + 1))
  }
  if (currentPage > pageCount - delta) {
    return getRange(Math.max(1, pageCount - delta * 2), pageCount)
  }
  return getRange(
    Math.max(1, currentPage - delta),
    Math.min(pageCount, currentPage + delta)
  )
}

const WUI_PAGING_SYMBOL = '__wui_paging'

export const injectPaging = (): PagingComposable => {
  const injected = inject<PagingComposable>(WUI_PAGING_SYMBOL)

  if (!injected) {
    throw new Error('Failed to inject paging composable state')
  }

  return injected
}

export const providePaging = (paging: PagingComposable) =>
  provide<PagingComposable>(WUI_PAGING_SYMBOL, paging)

const validatePageValue = (value: string | number, pages: number) => {
  if (!Number.isInteger(value)) {
    throw new Error(`Invalid paging value: "${value}"`)
  }
  if (value > pages || value < 1) {
    throw new Error(`Paging value out of range: "${value}"`)
  }
}

const calculatePagination = (count: number, pageSize: number, page: number) => {
  const pages = Math.ceil(count / pageSize) || WUI_PAGING_DEFAULT_PAGE_COUNT
  const max = page * pageSize
  const visibleFrom = (page - 1) * pageSize + 1
  const visibleTo = max > count ? count : max
  const visibleCount = visibleTo - visibleFrom + 1

  return {
    page,
    pages,
    count,
    visibleFrom,
    visibleTo,
    visibleCount,
  }
}
