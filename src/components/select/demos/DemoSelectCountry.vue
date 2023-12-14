<template>
  <WuiSelect
    v-model="exampleValue"
    :options="options"
    placeholder="Select a country"
  >
    <template #selected-option="{ selectedOption }">
      Selected: {{ selectedOption.value }}
    </template>
  </WuiSelect>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TOption } from '../select'
import { COUNTRIES } from '@/data'

const exampleValue = ref(undefined)

const options: TOption[] = Object.entries(COUNTRIES)
  .map(([value, label]) => ({ value, label }))
</script>
