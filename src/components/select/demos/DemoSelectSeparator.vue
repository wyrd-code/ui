<template>
  <WuiSelect
    v-model="exampleValue"
    :options="exampleOptions"
    placeholder="Please select"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TOption } from '../select'

const exampleValue = ref(undefined)

const exampleOptions: TOption[] = [
  {
    label: 'New York',
    value: 'newyork',
  },
  {
    role: 'separator',
  },
  {
    label: 'Paris',
    value: 'paris',
  },
  {
    label: 'Moscow',
    value: 'moscow',
  },
]
</script>
