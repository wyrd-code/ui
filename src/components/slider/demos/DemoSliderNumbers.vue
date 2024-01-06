<template>
  <WuiSlider
    v-model="value"
    numbers
    :min="0"
    :max="42"
  />
  <p>{{ value }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>
