<script setup>
import DemoDropdown from '@/components/dropdown/demos/DemoDropdown.vue'
</script>

# DropdownMenu

`WuiDropdown` allows users to select one of several options. Use it to display a temporarily visible list of options.

## A11y

- The trigger button has an `aria-expanded` role with a true/false value, that allows vocalizing menu states (open or closed)
- Ιf the dropdown menu is used within a navigation menu the `aria-current="page"` attribute should be assigned to the item corresponding to the active page
- A `role="separator"` role can be assigned to an empty `<li>` to separate the menu in sections
