<template>
  <WuiSlider v-model="value" show-steps :min="0" :max="20" />
  <p>{{ value }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>
