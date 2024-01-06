<template>
  <div class="max-w-128">
    <WuiSwitch
      v-model="isSelected"
      label="Test"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isSelected = ref(true)
</script>
