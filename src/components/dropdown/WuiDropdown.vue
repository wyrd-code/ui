<template>
  <VDropdown :distance="distance" :placement="placement" theme="wuidropdown">
    <slot name="button">
      <!-- This will be the popover reference (for the events and position) -->
      <button>Click me</button>
    </slot>

    <template #popper="{ toggle }">
      <slot
        item-class="wui-dropdown-item"
        item-active-class="wui-dropdown-item-active"
        :toggle="toggle"
      />
    </template>
  </VDropdown>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  placement: {
    type: String,
    default: 'auto',
  },
  distance: {
    type: Number,
    default: 6,
  },
})
</script>

<style lang="css">
@import url('dropdown.css');
</style>
