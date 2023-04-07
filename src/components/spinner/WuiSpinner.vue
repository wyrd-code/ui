<template>
  <span class="wui-spinner animate-spin animate-loop" :class="iconClass" />
</template>

<script lang="ts" setup>
defineProps({
  iconClass: {
    default: 'icon-ph-spinner-thin',
    type: String,
  },
})
</script>
