<script setup>
import DemoCheckbox from '@/components/checkbox/demos/DemoCheckbox.vue'
import DemoCheckboxVariants from '@/components/checkbox/demos/DemoCheckboxVariants.vue'
import DemoCheckboxPulse from '@/components/checkbox/demos/DemoCheckboxPulse.vue'
import DemoCheckboxDisabled from '@/components/checkbox/demos/DemoCheckboxDisabled.vue'
import DemoCheckboxStrike from '@/components/checkbox/demos/DemoCheckboxStrike.vue'
import DemoCheckboxSizes from '@/components/checkbox/demos/DemoCheckboxSizes.vue'
import DemoCheckboxState from '@/components/checkbox/demos/DemoCheckboxState.vue'
import DemoCheckboxReadonly from '@/components/checkbox/demos/DemoCheckboxReadonly.vue'
import DemoCheckboxMultipleValues from '@/components/checkbox/demos/DemoCheckboxMultipleValues.vue'
</script>

# Checkbox

Checkboxes allow users to select one or more options from a list.

Use a checkbox if the mental model of the selected values is **include** or **applies** (ie *Subscribe to email updates*) and it is used as part of a form.

If the mental model is **enable** or **turn on** (ie *Airplane mode*) and value change is immediate, use a [switch component](/components/switch/switch.md).

## Value

The component expects a `v-model` to be used on it, meaning it will accept a `model-value` prop and emit an `update:modelValue` event.

## Slots

Use the `label` and `help` slots or `label` & `help` props.

:::demo components/checkbox/demos/DemoCheckbox
<DemoCheckbox />
:::

## State

Checkbox can be **selected**, **not selected** and in an **indeterminate state** that represents both selected and not selected states.

Checkbox value is accordingly `true`, `false` or `mixed` when in an indeterminate state.

:::demo components/checkbox/demos/DemoCheckboxState
<DemoCheckboxState />
:::

## Hierarchy values

When a checkbox is used in a hierarchy, representing multiple values that are not identical, the checkbox should appear in the indeterminate state. Any subsequent click or tap should select the checkbox, and update all values to be selected. Another click or tap after that should deselect the checkbox, and update all values to be not selected.

The checkbox component will change `mixed` value to `true` on toggle, but it's up to you to get it back into a `mixed` state as fit, and adjust the rest of the values.

:::demo components/checkbox/demos/DemoCheckboxMultipleValues
<DemoCheckboxMultipleValues />
:::

## Variant

By default, checkboxes are not emphasized (gray). This version is optimal for when the checkbox is not the core part of an interface, such as in application panels, where all visual components are monochrome in order to direct focus to the content.

The emphasized (blue) version provides a visual prominence that is optimal for forms, settings, lists or grids of assets, and other situations where a checkbox need to be noticed.

:::demo components/checkbox/demos/DemoCheckboxVariants
<DemoCheckboxVariants />
:::

## Disabled

A checkbox in a disabled state shows that a selection exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that an action may become available later.

:::demo components/checkbox/demos/DemoCheckboxDisabled
<DemoCheckboxDisabled />
:::

## Readonly

Use the `readonly` prop to make the checkbox disabled but not visually affected.

:::demo components/checkbox/demos/DemoCheckboxReadonly
<DemoCheckboxReadonly />
:::

## Size

Use the sizes sparingly, they should be used to create a hierarchy of importance within the page.

:::demo components/checkbox/demos/DemoCheckboxSizes
<DemoCheckboxSizes />
:::

## Pulse

Use `pulse` prop to attract user's attention to the checkbox

:::demo components/checkbox/demos/DemoCheckboxPulse
<DemoCheckboxPulse />
:::

## Strike

Use the `strike` prop to show a line through the label when checkbox value is true.

:::demo components/checkbox/demos/DemoCheckboxStrike
<DemoCheckboxStrike />
:::

## Accessibility

The checkbox is built using custom elements, to allow for extending and customizing the visual appearance by passing your own check icon. To accomodate this and keep it accessible, several things are implemented on the replacement element:

- it is focusable using the `tab` key
- pressing the `space` key will toggle the value
- it has `role="checkbox"` to be identified by assistive browsers
- it uses `aria-checked` and `aria-readonly` attributes accordingly
