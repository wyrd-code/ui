<template>
  <WuiRadio
    v-model="value"
    :items="items"
    label="Fruit"
    orientation="horizontal"
    help="Please select a fruit"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)

const items = [
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Banana',
    value: 'banana',
  },
  {
    label: 'Orange',
    value: 'orange',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
]
</script>
