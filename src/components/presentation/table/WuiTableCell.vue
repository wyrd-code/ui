<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    v-if="['editor'].includes(field.type)"
    class="py-2 px-4"
    v-html="value"
  />
  <div v-else-if="field.linkTo">
    <router-link :to="field.linkTo(row)" class="underline">
      {{ value }}
    </router-link>
  </div>
  <div v-else-if="field.type === 'date-time'">
    <WuiTooltip :content="value">
      <span class="sm underline">
        {{ timeAgoValue }}
      </span>
    </WuiTooltip>
  </div>
  <div v-else>
    {{ value }}
  </div>
</template>

<script lang="ts">
import { computed, toRefs, defineComponent } from 'vue'

import { get, useTimeAgo } from '@/core'
import { FieldPublicMeta } from '@/types'

export default defineComponent({
  name: 'WuiTableCell',
  props: {
    row: {
      type: Object,
      required: true,
    },
    field: {
      type: Object as () => FieldPublicMeta,
      required: true,
    },
  },
  setup(props) {
    const limitTextLength = 100
    const { row, field } = toRefs(props)

    const value = computed(() => {
      const { path, key } = field.value
      const value = get(row.value, path || key, '')

      return value && value.length > limitTextLength
        ? `${value.slice(0, limitTextLength)}...`
        : value
    })

    const { value: timeAgoValue } = useTimeAgo(value)

    return {
      value,
      timeAgoValue,
    }
  },
})
</script>
