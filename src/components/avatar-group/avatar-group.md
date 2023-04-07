<script setup>
import DemoAvatarGroup from '@/components/avatar-group/demos/DemoAvatarGroup.vue'
import DemoAvatarGroupVertical from '@/components/avatar-group/demos/DemoAvatarGroupVertical.vue'
import DemoAvatarGroupMax from '@/components/avatar-group/demos/DemoAvatarGroupMax.vue'
</script>

# Avatar Group

For displaying several avatars together. For example, when an article is co-authored by several authors.

:::demo avatar-group/demos/DemoAvatarGroup
<DemoAvatarGroup />
:::

## Max

By default, number of avatars is limited to 5. You can set the `max` prop to change this value.
Any remaining avatars will be hidden and a small count of the hidden avatars will be displayed.

:::demo avatar-group/demos/DemoAvatarGroupMax
<DemoAvatarGroupMax />
:::

## Vertical

For article sidebars and special layouts, you can use the `vertical` prop.

:::demo avatar-group/demos/DemoAvatarGroupVertical
<DemoAvatarGroupVertical />
:::

::: info
[icons by User Insights](https://iconstore.co/icons/users-insights-free-icon-pack)
:::
