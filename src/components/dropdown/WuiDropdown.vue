<template>
  <WuiPopover class="wui-dropdown" v-bind="$attrs" :placement="placement">
    <slot />
    <template #content="{ close }">
      <slot name="content" :close="close" />
    </template>
  </WuiPopover>
</template>

<script lang="ts" setup>
defineProps({
  placement: {
    type: String,
    default: 'bottom',
  },
})
</script>

<style lang="css">
@import url('./dropdown.css');
</style>
