<template>
  <div class="max-w-128">
    <WuiSwitch v-model="isSelected" pulse>
      <template #label>
        <span>A pulsing switch</span>
      </template>
    </WuiSwitch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isSelected = ref(true)
</script>
