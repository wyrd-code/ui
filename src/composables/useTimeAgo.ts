import * as timeago from 'timeago.js'
import { computed, ComputedRef, ref, unref } from 'vue'

import { Timeout } from '@/domain'

export interface TimeAgo {
  value: ComputedRef<string>
}

export interface TimeAgoOptions {
  refresh?: number | false // false skips refresh
}

const refreshDefault = 1000 // ms

export function useTimeAgo(
  datetime: string | ComputedRef<string>,
  opts: TimeAgoOptions = {}
): TimeAgo {
  const count = ref(1)
  const interval = ref(opts.refresh || refreshDefault) // ms
  const timeout = ref<Timeout | null>(null)

  const timeIt = () => {
    clearInterval(timeout.value!)
    timeout.value = setInterval(() => (count.value += 1), interval.value)
  }

  const value = computed(() => {
    // Note: just making sure we recalculate the value when count changes
    if (opts.refresh !== false && count.value > 0) {
      timeIt()
    }
    return timeago.format(unref(datetime))
  })

  return {
    value,
  }
}
