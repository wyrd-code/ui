<template>
  <div class="max-w-72">
    <WuiCheckbox v-model="value">
      <template #label>
        <span>Are you human? <span class="icon-ph-person" /></span>
      </template>
      <template #help>
        <p>Help slot available to provide some more info</p>
      </template>
    </WuiCheckbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(false)
</script>
