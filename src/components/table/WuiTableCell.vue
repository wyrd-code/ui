<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    v-if="['editor'].includes(field.type)"
    class="py-2 px-4"
    v-html="value"
  />
  <div v-else-if="field.linkTo">
    <router-link
      :to="field.linkTo(row)"
      class="underline"
    >
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
import type { RouteLocationRaw } from 'vue-router'

interface FieldPublicMeta {
  type: string // FormFieldType
  key: string
  label: string
  path?: string
  linkTo?: (row: any) => RouteLocationRaw
  // TODO: use prisma enums without loading @prisma/client from client code
}

import { useTimeAgo } from '@/composables'
import { get } from '@/utilities'

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
      const valueFromRow = get(row.value, path || key, '')

      return valueFromRow && valueFromRow.length > limitTextLength
        ? `${valueFromRow.slice(0, limitTextLength)}...`
        : valueFromRow
    })

    const { value: timeAgoValue } = useTimeAgo(value)

    return {
      value,
      timeAgoValue,
    }
  },
})
</script>
