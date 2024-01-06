<template>
  <WuiButton
    variant="primary"
    @click="showDialog()"
  >Closable (default)</WuiButton>
  <WuiButton
    variant="primary"
    @click="showDialog({ closableMask: true })"
  >
    Closable mask
  </WuiButton>
  <WuiButton
    variant="primary"
    @click="showDialog({ closable: false })"
  >
    Not closable
  </WuiButton>

  <WuiDialog
    v-model="isDialogVisible"
    size="xs"
    title="A dialog"
    v-bind="config"
  >
    <WuiButton @click="isDialogVisible = false">Close</WuiButton>
  </WuiDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import WuiButton from '@/components/button/WuiButton.vue'

const isDialogVisible = ref(false)

const config = ref({})

const showDialog = (props = {}) => {
  config.value = props
  isDialogVisible.value = true
}
</script>
