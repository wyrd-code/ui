<script setup>
import DemoPopover from '@/components/popover/demos/DemoPopover.vue'
</script>

# Popover

`WuiPopover` is a utility component for displaying content that becomes visible on click or hover of the trigger element.

It will emit `open` and `close` events.

:::demo components/popover/demos/DemoPopover
<DemoPopover />
:::

::: danger
Popovers will wrap their slot content with a div element to achieve desired popup element styling and positioning. This wrapping can affect/break your styling.

In such cases it may make sense to use an inline icon to trigger the popup and put that inside your component.
:::

## Trigger

By default, popover is triggered on click. Passing `hover` will change the trigger to mouse hover.
You can also manually control the display by passing a `show` prop.
