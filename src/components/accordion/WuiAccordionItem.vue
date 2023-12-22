<template>
  <AccordionItem class="wui-accordion-item" :value="title">
    <AccordionHeader class="wui-accordion-item-header">
      <AccordionTrigger class="wui-accordion-item-trigger">
        <span class="wui-accordion-item-title">
          <slot name="header">
            {{ title }}
          </slot>
        </span>
        <span class="wui-accordion-item-trigger-icon icon-ph-caret-down"></span>
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent class="wui-accordion-item-content">
      <slot />
    </AccordionContent>
  </AccordionItem>
</template>

<script lang="ts" setup>
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from 'radix-vue'

// @unocss-include

defineProps({
  title: {
    type: String,
    default: null,
  },
})
</script>
