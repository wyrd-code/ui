<script setup>
import DemoDialog from '@/components/dialog/demos/DemoDialog.vue'
import DemoDialogForm from '@/components/dialog/demos/DemoDialogForm.vue'
import DemoDialogImage from '@/components/dialog/demos/DemoDialogImage.vue'
import DemoDialogNested from '@/components/dialog/demos/DemoDialogNested.vue'
import DemoDialogClosable from '@/components/dialog/demos/DemoDialogClosable.vue'
import DemoDialogConfirmation from '@/components/dialog/demos/DemoDialogConfirmation.vue'
</script>

# Dialog

Dialogs are meant to grab the user's full attention. They typically render a floating panel in the center of the screen, and use a backdrop to dim the rest of the application's contents.

## Value

The component expects a `v-model` to be used on it, meaning it will accept a `model-value` prop and emit an `update:modelValue` event.

## Slots

Use the `close`, `image`, `header`, `actions` and the `default` slot for body content.

:::demo components/dialog/demos/DemoDialog
<DemoDialog />
:::

## Closable

Use the `closable` prop to toggle the close button/slot and close the dialog when `esc` key is pressed (true by default).

Use the `closable-mask` prop to control if the dialog will close when the mask is clicked (by default, true if dialog is closable)

:::demo components/dialog/demos/DemoDialogClosable
<DemoDialogClosable />
:::

## Form

:::demo components/dialog/demos/DemoDialogForm
<DemoDialogForm />
:::

## Confirmation

:::demo components/dialog/demos/DemoDialogConfirmation
<DemoDialogConfirmation />
:::

## Image

:::demo components/dialog/demos/DemoDialogImage
<DemoDialogImage />
:::

## Nested

:::demo components/dialog/demos/DemoDialogNested
<DemoDialogNested />
:::

## Accessibility

[WAI-ARIA guidelines on modal dialogs](https://www.w3.org/WAI/ARIA/apg/#dialog_modal)

- Close dialog on overlay `click`
- Close dialog on pressing `esc`
- Toggle `aria-hidden` attribute on dialog
- Trap tab focus within the dialog
- Maintain focus position before and after toggling dialog
- Focus on the first focusable element within the dialog
