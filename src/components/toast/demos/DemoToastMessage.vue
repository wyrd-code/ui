<template>
  <WuiButton @click="isActive = !isActive">Direct message toast</WuiButton>
  <WuiToast
    v-if="isActive"
    placement="bottom"
    :icon="false"
    :duration="0"
    @close="isActive = false"
  >
    <template #icon><WuiAvatar name="John Doe" /></template>
    <template #label>John Doe sends a 🍺</template>
    <template #description
      >I found a great beer you need to try! You will love the taste of this
      one...</template
    >
    <template #aside="{ close }">
      <WuiButton label="Reply" @click.stop="close" />
    </template>
  </WuiToast>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isActive = ref(false)
</script>
