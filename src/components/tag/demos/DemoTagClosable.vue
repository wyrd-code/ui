<template>
  <WuiCodeDemoRow>
    <WuiTag
      v-for="tag in tags"
      :key="tag"
      closable
      variant="info"
      @close="() => removeTag(tag)"
    >
      {{ tag }}
    </WuiTag>
  </WuiCodeDemoRow>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fruit = ['apple', 'pear', 'pineapple']

const tags = ref([...fruit])

const removeTag = (tag) => {
  const position = tags.value.indexOf(tag)
  if (position !== -1) {
    tags.value.splice(position, 1)
  }

  if (!tags.value.length) {
    tags.value = [...fruit]
  }
}
</script>
