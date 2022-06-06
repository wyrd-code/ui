<template>
  <div class="wui-card">
    <div v-if="$slots.header" class="wui-card-header">
      <slot name="header" />
    </div>
    <div v-if="$slots.default" class="wui-card-body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="wui-card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WuiCard',
})
</script>

<style lang="css" scoped>
@import url('card.css');
</style>
