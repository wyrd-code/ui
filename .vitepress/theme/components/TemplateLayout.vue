<template>
  <div class="container mx-auto p-8">
    <Content />
  </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>
