<template>
  <div class="max-w-128">
    <WuiSwitch v-model="isSelected">
      <template #label>
        <span>Interested in switching?</span>
      </template>
      <template #help>
        <span>Switching can be fun and relaxing</span>
      </template>
    </WuiSwitch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isSelected = ref(true)
</script>
