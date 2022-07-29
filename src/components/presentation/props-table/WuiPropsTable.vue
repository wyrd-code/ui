<template>
  <div class="props-table-box">
    <h2 v-if="dataSheet" class="leading-none py-4 px-6">
      Props
      <WuiTag v-if="tagName">
        {{ tagName }}
      </WuiTag>
    </h2>
    <table v-if="dataSheet" class="props-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Default</th>
          <th>Accepted values</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataSheet" :key="item.property">
          <td v-for="(col, name) in item" :key="name">
            <div
              v-if="
                !['description', 'property'].includes(String(name)) &&
                Array.isArray(col)
              "
              style="line-height: 2"
            >
              <WuiTag v-for="i in col" :key="i">
                {{ i }}
              </WuiTag>
            </div>
            <span v-else>{{ col }}</span>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 v-if="slotSheet" class="leading-none py-4 px-6">Slots</h2>
    <table v-if="slotSheet" class="props-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in slotSheet" :key="item.property">
          <td v-for="col in item" :key="col">
            <span>{{ col }}</span>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 v-if="methodSheet" class="leading-none py-4 px-6">Methods</h2>
    <table v-if="methodSheet" class="props-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Arguments</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in methodSheet" :key="item.property">
          <td v-for="col in item" :key="col">
            <span>{{ col }}</span>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 v-if="eventSheet" class="leading-none py-4 px-6">Events</h2>
    <table v-if="eventSheet" class="props-table">
      <thead>
        <tr>
          <th>Event</th>
          <th>Description</th>
          <th>Arguments</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in eventSheet" :key="item.property">
          <td v-for="(col, name) in item" :key="name">
            <span>{{ col }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import WuiTag from '../tag/WuiTag.vue'

export default defineComponent({
  components: {
    WuiTag,
  },
  props: {
    tagName: {
      type: String,
      default: null,
    },
    dataSheet: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    eventSheet: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    methodSheet: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    slotSheet: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  },
})
</script>

<style lang="css" scoped>
@import url('props-table.css');
</style>
