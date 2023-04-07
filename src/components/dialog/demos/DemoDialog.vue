<template>
  <WuiButton variant="primary" @click="isDialogVisible = true"
    >Show dialog</WuiButton
  >

  <WuiDialog v-model="isDialogVisible">
    <template #media>
      <div class="bg-black">
        <img
          class="max-h-screen-sm mx-auto"
          src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
          width="1000"
          height="667"
          alt="Random image"
        />
      </div>
    </template>

    <template #header>
      <h3 class="text-lg font-bold">A custom header slot</h3>
    </template>

    <template #close="{ close }">
      <WuiButton @click="close">Close me</WuiButton>
    </template>

    <p>Default slot content is placed automatically.</p>

    <template #actions="{ close }">
      <WuiButton variant="primary" @click="close">Close</WuiButton>
    </template>
  </WuiDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isDialogVisible = ref(false)
</script>
