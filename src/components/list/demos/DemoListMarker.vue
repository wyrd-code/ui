<template>
  <WuiList
    v-for="marker in WUI_LIST_MARKERS"
    :key="marker"
    :marker="marker"
    :items="[marker, marker]"
  />
</template>

<script lang="ts" setup>
import { WUI_LIST_MARKERS } from '../list'
</script>
