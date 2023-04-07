<template>
  <WuiSlider v-model="value" disabled :min="0" :max="20" />
  <p>{{ value }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>
