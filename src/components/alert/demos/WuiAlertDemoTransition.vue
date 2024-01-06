<template>
  <WuiAlert
    title="This alert is closable and has a transition"
    transition="slide-left"
    closable
    :visible="visible"
    @close="visible = false"
  />
  <WuiButton
    v-if="!visible"
    @click="visible = true"
  >Reset</WuiButton>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(true)
</script>
