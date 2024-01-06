<template>
  <WuiSelect
    v-model="value"
    :options="options"
    placeholder="Please select"
    disabled
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TSelectOption } from '../select'

const value = ref(undefined)

const options: TSelectOption[] = [
  {
    label: 'New York',
    value: 'newyork',
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
