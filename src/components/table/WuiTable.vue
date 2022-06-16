<template>
  <table class="wui-table">
    <thead>
      <tr>
        <th v-for="field in fields" :key="field.key">
          {{ field.label }}
        </th>
        <th v-if="$slots.rowActions">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, idx) in data" :key="`row-${idx}`">
        <td v-for="field in fields" :key="`${field.key}Cell`">
          <slot :name="`${field.key}Cell`" :field="field" :row="row">
            <WuiTableCell :field="field" :row="(row as any)" />
          </slot>
        </td>
        <td v-if="$slots.rowActions">
          <slot name="rowActions" :row="row" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { FieldPublicMeta } from '../../ui.types'
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

<style lang="css" scoped>
@import url('table.css');
</style>
