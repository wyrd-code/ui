<template>
  <h1>Demo Home</h1>
  <WuiButton type="primary">Test</WuiButton>
  <h2>Time ago</h2>
  <pre>{{ value }}</pre>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { useTimeAgo } from '@/ui-vue'

const refVal = computed(() => '2022-07-28T23:54:47Z')

const { value } = useTimeAgo(refVal)
</script>
