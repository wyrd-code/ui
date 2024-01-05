<script setup>
import DemoSelect from '@/components/select/demos/DemoSelect.vue'
import DemoSelectCountry from '@/components/select/demos/DemoSelectCountry.vue'
import DemoSelectDisabled from '@/components/select/demos/DemoSelectDisabled.vue'
import DemoSelectDisabledOptions from '@/components/select/demos/DemoSelectDisabledOptions.vue'
import DemoSelectCustom from '@/components/select/demos/DemoSelectCustom.vue'
import DemoSelectSeparator from '@/components/select/demos/DemoSelectSeparator.vue'
</script>

# Select

Select allows users to choose one option from a list of values.

## Basic

:::demo components/select/demos/DemoSelect
<DemoSelect />
:::

## Country

The countries example demonstrates behavior with a long list of options.

You can search through options by simply typing a phrase and use keyboard navigation to select an option.

:::demo components/select/demos/DemoSelectCountry
<DemoSelectCountry />
:::

## Disabled

A disabled select component will not be focusable.

:::demo components/select/demos/DemoSelectDisabled
<DemoSelectDisabled />
:::

A select will clearly show disabled options and they will not show be selected as you search by typing, neither will you be able to select them using keyboard navigation.

:::demo components/select/demos/DemoSelectDisabledOptions
<DemoSelectDisabledOptions />
:::

## Custom

This example demonstrates how you can modify the trigger, clear value and option icons, as well as modify the slots for display of selected value and the option value itself.

:::demo components/select/demos/DemoSelectCustom
<DemoSelectCustom />
:::

## Separator

:::demo components/select/demos/DemoSelectSeparator
<DemoSelectSeparator />
:::
