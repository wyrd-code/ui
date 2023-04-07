<template>
  <WuiCheckbox v-model="value" pulse label="Look at me" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(false)
</script>
