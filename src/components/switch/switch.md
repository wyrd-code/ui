<script setup>
import DemoSwitch from '@/components/switch/demos/DemoSwitch.vue'
import DemoSwitchDisabled from '@/components/switch/demos/DemoSwitchDisabled.vue'
import DemoSwitchPulse from '@/components/switch/demos/DemoSwitchPulse.vue'
import DemoSwitchReadonly from '@/components/switch/demos/DemoSwitchReadonly.vue'
import DemoSwitchSizes from '@/components/switch/demos/DemoSwitchSizes.vue'
import DemoSwitchSlots from '@/components/switch/demos/DemoSwitchSlots.vue'
import DemoSwitchVariants from '@/components/switch/demos/DemoSwitchVariants.vue'
</script>

# Switch

:::demo components/switch/demos/DemoSwitch
<DemoSwitch />
:::

## When to use

Use a switch if you are:

1. Applying system state (ie account setting), not contextual state (ie value in a form)
2. Presenting binary options, not opposing ones
3. Changing a state property, not performing an action

Please see [Stop Misusing Toggle Switches](https://uxmovement.com/mobile/stop-misusing-toggle-switches/)

## Slots

:::demo components/switch/demos/DemoSwitchSlots
<DemoSwitchSlots />
:::

## Variants

:::demo components/switch/demos/DemoSwitchVariants
<DemoSwitchVariants />
:::

## Disabled

:::demo components/switch/demos/DemoSwitchDisabled
<DemoSwitchDisabled />
:::

## Readonly

Use the `readonly` prop to make the switch disabled but not visually affected.

:::demo components/switch/demos/DemoSwitchReadonly
<DemoSwitchReadonly />
:::

## Pulse

Use the `pulse` prop to attract users attention

:::demo components/switch/demos/DemoSwitchPulse
<DemoSwitchPulse />
:::

## Sizes

Use the sizes sparingly, they should be used to create a hierarchy of importance within the page.

:::demo components/switch/demos/DemoSwitchSizes
<DemoSwitchSizes />
:::

## Accessibility

- it is focusable using the `tab` key
- pressing the `space` key will toggle the value
- it has `role="switch"` to be identified by assistive browsers
- it uses `aria-checked` and `aria-readonly` attributes accordingly
