<template>
  <AccordionRoot class="wui-accordion" type="single" :collapsible="true">
    <slot />
  </AccordionRoot>
</template>

<script lang="ts" setup>
import { AccordionRoot } from 'radix-vue'
</script>

<style lang="css">
@import url('accordion.css');
</style>
