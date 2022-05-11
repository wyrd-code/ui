<template>
  <table class="bg-transparent border-collapse w-full">
    <thead class="">
      <tr>
        <th
          v-for="field in fields"
          :key="field.key"
          class="border-b font-semibold border-gray-300 text-sm text-left py-4 px-4 capitalize whitespace-no-wrap align-middle"
        >
          {{ field.label }}
        </th>
        <th
          v-if="$slots.rowActions"
          class="border-b font-semibold border-gray-300 text-sm text-left py-4 px-4 whitespace-no-wrap align-middle"
        >
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, idx) in data" :key="`row-${idx}`">
        <td
          v-for="field in fields"
          :key="`${field.key}Cell`"
          class="border-b border-neutral-200 text-sm text-left py-2 px-4 align-middle"
        >
          <slot :name="`${field.key}Cell`" :field="field" :row="row">
            <WuiTableCell :field="field" :row="(row as any)" />
          </slot>
        </td>
        <td
          v-if="$slots.rowActions"
          class="border-b border-neutral-200 text-sm text-left py-2 px-4 table-cell whitespace-no-wrap align-middle"
        >
          <slot name="rowActions" :row="row" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { FieldPublicMeta } from '~/ui.types'

import WuiTableCell from './WuiTableCell.vue'

export default defineComponent({
  name: 'WuiTable',
  components: {
    WuiTableCell,
  },
  props: {
    fields: {
      type: Array as () => FieldPublicMeta[],
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
    textLimit: {
      type: Number,
      default: () => 40,
    },
  },
})
</script>
