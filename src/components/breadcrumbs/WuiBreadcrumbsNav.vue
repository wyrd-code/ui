<template>
  <WuiMenu
    class="wui-breadcrumbs"
    :items="items"
  />
</template>

<script lang="ts" setup>
import { WUI_BREADCRUMB_PROPS } from './breadcrumbs'

defineProps(WUI_BREADCRUMB_PROPS)

const items = [
  {
    label: 'Home',
    to: '#',
  },
  {
    label: 'Settings',
    to: '#',
  },
]
</script>

<style lang="css">
@import url('breadcrumbs.css');
</style>
