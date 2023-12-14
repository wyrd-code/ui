<script setup>
import DemoTooltip from '@/components/tooltip/demos/DemoTooltip.vue'
import DemoTooltipPlacement from '@/components/tooltip/demos/DemoTooltipPlacement.vue'
import DemoTooltipImage from '@/components/tooltip/demos/DemoTooltipImage.vue'
</script>

# Tooltip

`WuiTooltip` extends the [popover](/components/popover/popover.html) component and will transparently pass down all it's attributes/props to the popover component.

Tooltip is triggered primarily by hovering, while popover is by default triggered by a click.

It will emit `open` and `closed` events.

:::demo components/tooltip/demos/DemoTooltip
<DemoTooltip />
:::

::: danger
Tooltips will wrap their slot content with a div element to achieve desired popup element styling and positioning. This wrapping can affect/break your styling.

In such cases it may make sense to use an inline icon to trigger the popup and put that inside your component.
:::

## Placement

You can manualy set the `placement` prop `left`, `right`, `top`, `bottom`.

:::demo components/tooltip/demos/DemoTooltipPlacement
<DemoTooltipPlacement />
:::

## Image

:::demo components/tooltip/demos/DemoTooltipImage
<DemoTooltipImage />
:::
