<template>
  <WuiButtonGroup>
    <WuiButton
      variant="primary"
      @click="() => show('left')"
    >Left drawer</WuiButton>
    <WuiButton
      variant="primary"
      @click="() => show('right')"
    >Right drawer</WuiButton>
  </WuiButtonGroup>
  <WuiDrawer
    v-model="isDialogVisible"
    :placement="placement"
  >Drawer</WuiDrawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import WuiButtonGroup from '@/components/button-group/WuiButtonGroup.vue'

const isDialogVisible = ref(false)
const placement = ref('left')

const show = (place) => {
  placement.value = place
  isDialogVisible.value = true
}
</script>
