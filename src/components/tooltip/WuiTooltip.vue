<template>
  <WuiPopover
    class="wui-tooltip"
    v-bind="$attrs"
    hover
    arrow
    @open="$emit('open')"
    @close="$emit('close')"
  >
    <template #button>
      <slot />
    </template>
    <template #content="{ close }">
      <slot name="content" :close="close" />
    </template>
  </WuiPopover>
</template>

<script lang="ts" setup>
defineEmits(['open', 'close'])
</script>

<style lang="css">
@import 'tooltip.css';
</style>
