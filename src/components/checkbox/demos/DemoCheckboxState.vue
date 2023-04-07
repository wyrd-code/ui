<template>
  <div class="">
    <WuiCheckbox v-model="state1" readonly>
      <template #label>Not selected</template>
    </WuiCheckbox>
    <WuiCheckbox v-model="state2" readonly>
      <template #label>Selected</template>
    </WuiCheckbox>
    <WuiCheckbox v-model="state3" readonly>
      <template #label>Indeterminate (mixed)</template>
    </WuiCheckbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const state1 = ref(false)
const state2 = ref(true)
const state3 = ref('mixed')
</script>
