<template>
  <WuiSlider
    v-model="value"
    :min="0"
    :max="10"
    :step="1"
  />
  <p>{{ value }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>
