<template>
  <WuiRadio
    v-model="value"
    :items="items"
    label="Fruit"
    help="Please select a fruit"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)

const items = [
  {
    value: 'apples',
    label: 'Apples',
    help: 'red or green',
  },
  {
    value: 'bananas',
    label: 'Bananas',
    help: 'mostly yellow',
  },
]
</script>
