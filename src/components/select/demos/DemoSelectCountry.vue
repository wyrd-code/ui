<template>
  <WuiSelect
    v-model="exampleValue"
    :options="options"
    placeholder="Select a country"
  >
  </WuiSelect>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { COUNTRIES } from '@/data'

import type { TOption } from '../select'

const exampleValue = ref(undefined)

const options: TOption[] = Object.entries(COUNTRIES).map(([value, label]) => ({
  value,
  label,
}))
</script>
