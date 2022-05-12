<template>
  <div>
    <h1>Article</h1>

    <div class="flex w-full mx-auto space-x-4">
      <WuiArticle
        :size-class="sizeClass"
        :prose-class="proseClass"
        class="flex-grow"
      >
        <template #coverPhoto>
          <img
            src="/raspberry.jpg"
            alt=""
            class="max-h-md w-auto"
            width="2250"
            height="1500"
          />
        </template>
        <h1>Typography preview</h1>
        <WuiArticleProseExample />
      </WuiArticle>
      <WuiCodeDemo class="w-64">
        <template #props>
          <WuiInput v-model="sizeClass" label-top="Size classes" />
          <WuiInput v-model="proseClass" label-top="Prose classes" />
        </template>
      </WuiCodeDemo>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const sizeClass = ref('xl:text-lg')
const proseClass = ref('prose-zinc')
</script>
