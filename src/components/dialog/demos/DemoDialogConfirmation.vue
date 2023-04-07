<template>
  <WuiButton variant="danger" @click="isDialogVisible = true">
    Delete account
  </WuiButton>

  <WuiDialog
    v-model="isDialogVisible"
    size="sm"
    title="Delete account"
    description="Are you sure you want to delete your account? It will be deleted
      permanently, please confirm"
  >
    <template #actions>
      <WuiButtonGroup>
        <WuiButton variant="danger" @click="isDialogVisible = false">
          Delete
        </WuiButton>
        <WuiButton @click="isDialogVisible = false">Cancel</WuiButton>
      </WuiButtonGroup>
    </template>
  </WuiDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import WuiButtonGroup from '@/components/button-group/WuiButtonGroup.vue'

const isDialogVisible = ref(false)
</script>
