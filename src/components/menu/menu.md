<script setup>
import DemoMenu from '@/components/menu/demos/DemoMenu.vue'
import DemoMenuAdvanced from '@/components/menu/demos/DemoMenuAdvanced.vue'
</script>

# Menu

`WuiMenu` is used to display a list of controls (a, button) that perform a function within the page.

:::demo menu/demos/DemoMenu
<DemoMenu />
:::

::: warning Menu items should not be links
Menus are strictly meant to display a list of values or actions that are performed within the current page. If you need linked items, use a `WuiNav` component.

This allows precise control over aria attributes and let's each components work well with screen readers.
:::

## Advanced

Including disabled & separator items, with icons, descriptions and custom styling of both item and it's icon

:::demo menu/demos/DemoMenuAdvanced
<DemoMenuAdvanced />
:::

## A11y

[Aria Menu](https://w3c.github.io/aria/#menu)

- The menu role is appropriate when a list of menu items is presented in a manner similar to a menu on a desktop application.
- To be keyboard accessible, authors SHOULD manage focus of descendants for all instances of this role, as described in Managing Focus.
- Elements with the role menu have an implicit aria-orientation value of vertical.
