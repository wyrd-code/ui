<script setup>
import DemoDropdown from '@/components/dropdown/demos/DemoDropdown.vue'
</script>

# Dropdown

`WuiDropdown` is used it to display a temporarily visible list of linked items.

## Simple

:::demo components/dropdown/demos/DemoDropdown
<DemoDropdown />
:::

## A11y

- The trigger button has an `aria-expanded` role with a true/false value, that allows vocalizing menu states (open or closed)
- A `role="separator"` role can be assigned to an empty `<li>` to separate the menu in sections
