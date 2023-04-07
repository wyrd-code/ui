<template>
  <WuiList as="dl">
    <WuiListItem v-for="key in Object.keys(person)" :key="key" class="flex">
      <dt class="text-sm">{{ key }}</dt>
      <dd class="">
        {{ person[key] }}
      </dd>
    </WuiListItem>
  </WuiList>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const person = ref({
  label: 'Jean Marc Rousoff',
  email: 'jm@rouso.ff',
  bio: 'Your favorite luxury jeweler!',
})
</script>
