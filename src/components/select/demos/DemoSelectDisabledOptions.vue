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
    disabled: true,
  },
  {
    label: 'Paris',
    value: 'paris',
    disabled: true,
  },
  {
    label: 'Moscow',
    value: 'moscow',
  },
]
</script>
