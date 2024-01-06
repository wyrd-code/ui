<template>
  <div class="max-w-72 space-y-2">
    <WuiCheckbox
      v-model="accepted"
      disabled
      label="I accept the terms"
    />
    <WuiCheckbox
      v-model="subscribed"
      disabled
      label="Subscribe for updates"
      hint="Get notified when you get updates"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const accepted = ref(true)
const subscribed = ref(false)
</script>
