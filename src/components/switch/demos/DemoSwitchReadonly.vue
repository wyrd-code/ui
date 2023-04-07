<template>
  <div class="max-w-128">
    <WuiSwitch v-model="isSelected" readonly>
      <template #label>
        <span>A read only switch</span>
      </template>
    </WuiSwitch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isSelected = ref(true)
</script>
