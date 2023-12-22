<script setup>
import DemoAccordion from '@/components/accordion/demos/DemoAccordion.vue'
import DemoAccordionNested from '@/components/accordion/demos/DemoAccordionNested.vue'
import DemoAccordionSlots from '@/components/accordion/demos/DemoAccordionSlots.vue'
</script>

# Accordion

An accordion is a list of headers that hide or reveal additional content when selected.

Use `Accordion` and `AccordionItem` components to easily compose collapsible interfaces.

## Basic

:::demo components/accordion/demos/DemoAccordion
<DemoAccordion />
:::


## Slots

`AccordionItem` exposes `default`, `header`, `icon-expanded` and `icon-contracted` slots.

:::demo components/accordion/demos/DemoAccordionSlots
<DemoAccordionSlots />
:::

## Nested

:::demo components/accordion/demos/DemoAccordionNested
<DemoAccordionNested />
:::
