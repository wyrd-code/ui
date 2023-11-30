<script setup>
import DemoToast from '@/components/toast/demos/DemoToast.vue'
import DemoToastAdvanced from '@/components/toast/demos/DemoToastAdvanced.vue'
import DemoToastMessage from '@/components/toast/demos/DemoToastMessage.vue'
import DemoToastVariants from '@/components/toast/demos/DemoToastVariants.vue'
</script>

# Toast

Toasts display brief, temporary notifications. They're meant to be noticed without disrupting a user's experience or requiring an action to be taken.

## Props & Slots

You can use the standard `icon`, `label`, `description` props. Setting the `icon` to false will remove the default icon (usually shown for the specified variant). You can also use slots of the same name, along with additional `aside` and `actions` slots. Note that using the `aside` slot will hide the close button regardless if the toast is closable or not.

### Placement

Use one of `top`, `top-start`, `top-end` or `bottom`, `bottom-start`, `bottom-end` placements, where the placement refers to position relative to document body.

### Variant

Use the variant prop to change the appearance of the toast.

:::demo components/toast/demos/DemoToastVariants
<DemoToastVariants />
:::

### MaxToasts

Set the `max-toasts` prop to force queueing of toasts, making sure only a fixed amount can be shown at once. The variants demo above sets it to `1` so only a single Toast can be visible at once.

### Closable

By default, toasts will dismiss when the user clicks the close button. If you wish to prevent this and hide the close button, set `closable` to `false`

### Duration

Toasts will also auto-dismiss by default after `duration` seconds. To keep them permanent, set it to 0. Be sure to set a minimum of 5 seconds so that users can have time to read the message.

If an actionable toast is set to auto-dismiss, make sure that the action is still available elsewhere in the app.

### PauseOnHover

Toasts with a duration have internal timers. Hovering the toast will temporarily stop this timer and prevent the toast closing while user has a mouse hovering or is focused into the toast. To control this, you can set a boolean `pause-on-hover` prop.

## Demos

### Basic

:::demo components/toast/demos/DemoToast
<DemoToast />
:::

### Advanced

An advanced demo using slots and inline rendering of component.

:::demo components/toast/demos/DemoToastAdvanced
<DemoToastAdvanced />
:::

### Message

Another advanced demo, showing how the `aside` slot can be used to customize the main action button location.

:::demo components/toast/demos/DemoToastMessage
<DemoToastMessage />
:::

## When to use

Use Toasts only for confirmations, simple notifications, and low-priority alerts that don't interrupt the user experience a lot.

Use Dialogs when user’s attention is required, for displaying important info or needing a response.

## How to use

### Multiple Toasts

Don't show multiple toasts at the same time. When toasts are consecutively or simultaneously triggered, their display and behavior should follow a priority queue.

### Too many toasts

Be mindful of how often you trigger toasts. Even though they're not as disruptive as dialogs, they still interrupt a user’s attention. Frequent interruptions interfere with usability, especially for people with visual and cognitive disabilities (see WCAG Success Criterion 2.2.4 Interruptions).

### Writing for Toasts

- Write in sentence case with no period
- Use an instructive tone
- Keep it short
- Use simple, generic language

ie **Task completed**, **A new version is available**
