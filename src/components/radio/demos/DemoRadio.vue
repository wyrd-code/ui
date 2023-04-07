<template>
  <WuiRadioGroup
    v-model="value"
    :items="items"
    label="Fruit"
    instructions="Please select a fruit"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)

const items = [
  {
    label: 'Apples',
    value: 'apples',
  },
  {
    label: 'Bananas',
    value: 'bananas',
  },
]
</script>
