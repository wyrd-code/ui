<template>
  <WuiNumberInput v-model="value" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(12)
</script>
