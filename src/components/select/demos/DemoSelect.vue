<template>
  <WuiSelect
    v-model="exampleValue"
    :options="exampleOptions"
    placeholder="Please select"
  >
    <template #placeholder="{ props }">
      <div class="items-center" :style="{ display: 'flex' }">
        <span>(custom) {{ props.placeholder }}</span>
      </div>
    </template>
    <template #selected-option="{ selectedOption }">
      Selected: {{ selectedOption.label }}
    </template>
    <template #option="{ option }">
      <div class="items-center" :style="{ display: 'flex' }">
        <span class="h-4 mr-2 icon-ph-github-logo-fill" />
        {{ option.label }}
      </div>
    </template>
    <template #icon>
      <span class="h-4 text-yellow-400 icon-ph-github-logo-fill" />
    </template>
  </WuiSelect>
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
    label: 'Paris',
    value: 'paris',
  },
  {
    label: 'Moscow',
    value: 'moscow',
  },
]
</script>
