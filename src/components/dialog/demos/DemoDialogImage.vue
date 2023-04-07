<template>
  <WuiButton variant="primary" @click="isDialogVisible = true">
    View photo
  </WuiButton>
  <WuiDialog v-model="isDialogVisible" size="auto" closable-mask>
    <template #media>
      <img
        src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
        width="1000"
        height="667"
        alt="Random image"
      />
    </template>
  </WuiDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isDialogVisible = ref(false)
</script>
