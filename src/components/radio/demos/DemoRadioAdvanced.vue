<template>
  <WuiRadio
    v-model="value"
    :items="items"
    label="Fruit"
    hint="Please select a fruit"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)

const items = [
  {
    value: 'apples',
    label: 'Apples',
    hint: 'red or green',
  },
  {
    value: 'bananas',
    label: 'Bananas',
    hint: 'mostly yellow',
  },
]
</script>
