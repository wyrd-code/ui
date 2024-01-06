<template>
  <WuiSelect
    v-model="model"
    :options="options"
    placeholder="Select a country"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { COUNTRIES } from '@/data'

import type { TSelectOption } from '../select'

const model = ref(undefined)

const options: TSelectOption[] = Object.entries(COUNTRIES).map(
  ([value, label]) => ({
    value,
    label,
  })
)
</script>
