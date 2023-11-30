---
title: Alert
lang: en-US
---
<script setup>
import WuiAlertDemo from '@/components/alert/demos/WuiAlertDemo.vue'
import WuiAlertDemoVariants from '@/components/alert/demos/WuiAlertDemoVariants.vue'
import WuiAlertDemoIcon from '@/components/alert/demos/WuiAlertDemoIcon.vue'
import WuiAlertDemoTitle from '@/components/alert/demos/WuiAlertDemoTitle.vue'
import WuiAlertDemoTransition from '@/components/alert/demos/WuiAlertDemoTransition.vue'
</script>

# Alert

**An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's flow.**

:::demo components/alert/demos/WuiAlertDemo
<WuiAlertDemo />
:::

## Slots

You can set the `title`, `text` and `icon` via prop or a slot. If both provided, slotted content will be shown.

:::demo components/alert/demos/WuiAlertDemoTitle
<WuiAlertDemoTitle />
:::

## Variants

There are four variants that communicate the severity of information being communicated.

:::demo components/alert/demos/WuiAlertDemoVariants
<WuiAlertDemoVariants />
:::

## Icons

Alert component has predefined icons for each severity. You can pass a custom icon using the `icon` prop or slot.

:::demo components/alert/demos/WuiAlertDemoIcon
<WuiAlertDemoIcon />
:::

## Closable & Transition

Use the `visible` and `closable` properties to make the alert closable. When a user clicks on the close button, the alert will emit a `close` event.
Listen to this event and change the `visible` prop value to false to hide the alert.

To customize the transition, simply include it's css definition somewhere in your app or component, and pass it's name via the `transition` prop.
Here, we are using `slide-left` as the transition.

:::demo components/alert/demos/WuiAlertDemoTransition
<WuiAlertDemoTransition />
:::

## Accessibility

[WAI-ARIA Alert](https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html)

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (for example the visible text), or is included through alternative means, such as additional hidden text.

### Accessibility Features

Because an alert is for critical information, assistive technologies may provide special behaviors designed to help call attention to changes in the text of an alert. For example, screen readers may interrupt all other speech and preface announcement of the new alert text with a special sound or phrase.

When the component is dynamically displayed, the content is automatically announced by most screen readers. At this time, screen readers do not inform users of alerts that are present when the page loads.

If displaying alerts in html provided via Server Side Rendering that will become interactive in the client, you may want to keep the alerts from rendering in the SSR  html response by the server but make sure they appear after page load so screen readers will anounce the alert contents to the user.

### Keyboard Support

Actions must have a tab index of 0 so that they can be reached by keyboard-only users.
