<template>
  <div class="wui-collapse">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WuiCollapse',
})
</script>

<style lang="css" scoped>
@import url('collapse.css');
</style>
