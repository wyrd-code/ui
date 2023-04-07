<script setup>
import DemoPagingDelta from '@/components/paging/demos/DemoPagingDelta.vue'
import DemoPagingSimple from '@/components/paging/demos/DemoPagingSimple.vue'
import DemoPagingBasic from '@/components/paging/demos/DemoPagingBasic.vue'
import DemoPagingSummary from '@/components/paging/demos/DemoPagingSummary.vue'
import DemoPagingExpanded from '@/components/paging/demos/DemoPagingExpanded.vue'
</script>

# Paging

Use the paging component for navigating large data sets.

## Basic

:::demo paging/demos/DemoPagingBasic
<DemoPagingBasic />
:::

## Delta

By using `delta` prop you can change the number of pages links visible aside the active one.

:::demo paging/demos/DemoPagingDelta
<DemoPagingDelta />
:::

## Simple

:::demo paging/demos/DemoPagingSimple
<DemoPagingSimple />
:::

## Expanded

:::demo paging/demos/DemoPagingExpanded
<DemoPagingExpanded />
:::

## Summary

You can switch the summary text by changing the `mode` prop of the `WuiPagingSummary` component.

:::demo paging/demos/DemoPagingSummary
<DemoPagingSummary />
:::
