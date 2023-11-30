<script setup>
import DemoSpinner from '@/components/spinner/demos/DemoSpinner.vue'
import DemoSpinnerIcon from '@/components/spinner/demos/DemoSpinnerIcon.vue'
import DemoSpinnerOverlay from '@/components/spinner/demos/DemoSpinnerOverlay.vue'
</script>

# Spinner

Use `WuiSpinner` to indicate loading state.

## Basic

The size of the spinner will adjust to the text size in it's parent component.

:::demo components/spinner/demos/DemoSpinner
<DemoSpinner />
:::

## Icon

Change the spinner icon by setting the `icon-class` property.

Note: this assumes you have UnoCSS setup and the icon class you are using has a corresponding icon in the relevant icon library.

:::demo components/spinner/demos/DemoSpinnerIcon
<DemoSpinnerIcon />
:::

## Spinner with overlay

Use `WuiSpinnerOverlay` to indicate loading state using an overlay that prevents interaction with overlaid elements.

The overlay is absolutely positioned using CSS, so make sure to set `position: relative` on one of it's parent html elements so the overlay can fit that element.

:::demo components/spinner/demos/DemoSpinnerOverlay
<DemoSpinnerOverlay />
:::
