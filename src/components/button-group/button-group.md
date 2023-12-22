<script setup>
import DemoButtonGroup from '@/components/button-group/demos/DemoButtonGroup.vue'
import DemoButtonGroupVertical from '@/components/button-group/demos/DemoButtonGroupVertical.vue'
import DemoButtonGroupCondensed from '@/components/button-group/demos/DemoButtonGroupCondensed.vue'
import DemoButtonGroupRadio from '@/components/button-group/demos/DemoButtonGroupRadio.vue'
import DemoButtonGroupStretch from '@/components/button-group/demos/DemoButtonGroupStretch.vue'
</script>

# Button group

A button group collects similar or related actions.

:::demo components/button-group/demos/DemoButtonGroup
<DemoButtonGroup />
:::

## Condensed

By default, buttons are separated using standard sizing units. If you wish to condense them together, set the `condensed` prop.

:::demo components/button-group/demos/DemoButtonGroupCondensed
<DemoButtonGroupCondensed />
:::

## Radio buttons

Make sure you always declare initial value for radio buttons as they need to hold value even in an empty form.

You can set individual button prop values by adding them to the radio option.

:::demo components/button-group/demos/DemoButtonGroupRadio
<DemoButtonGroupRadio />
:::

## Stretch

Force button groups to stretch horizontally using `stretch` values `wide` and `full`.

:::demo components/button-group/demos/DemoButtonGroupStretch
<DemoButtonGroupStretch />
:::

## Vertical

:::demo components/button-group/demos/DemoButtonGroupVertical
<DemoButtonGroupVertical />
:::

## Best practices

- Use button groups to place together calls to action that have a relationship
- Consider that too many buttons can cause confusion
- Check your implementation on small screens
- Use up to six buttons if they contain an icon with no text
