<template>
  <div
    class="wui-divider"
    :class="{
      'wui-divider--horizontal': !vertical,
      'wui-divider--vertical': vertical,
    }"
    role="separator"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WuiDivider',
  props: { vertical: { type: Boolean } },
})
</script>

<style lang="css" scoped>
@import url('divider.css');
</style>
