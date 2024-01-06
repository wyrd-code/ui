<template>
  <div class="max-w-128">
    <WuiSwitch
      v-model="isSelected"
      disabled
    >
      <template #label>
        <span>Can't touch this?</span>
      </template>
    </WuiSwitch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isSelected = ref(true)
</script>
