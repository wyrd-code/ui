<script setup>
import DemoAvatar from '@/components/avatar/demos/DemoAvatar.vue'
import DemoAvatarBadge from '@/components/avatar/demos/DemoAvatarBadge.vue'
import DemoAvatarSize from '@/components/avatar/demos/DemoAvatarSize.vue'
import DemoAvatarColor from '@/components/avatar/demos/DemoAvatarColor.vue'
import DemoAvatarSquare from '@/components/avatar/demos/DemoAvatarSquare.vue'
import DemoAvatarPlaceholder from '@/components/avatar/demos/DemoAvatarPlaceholder.vue'
import DemoAvatarInitials from '@/components/avatar/demos/DemoAvatarInitials.vue'
import DemoAvatarLabel from '@/components/avatar/demos/DemoAvatarLabel.vue'
</script>

# Avatar

Avatars are round by default to keep close to the prevalent standard appearance of avatars on the web.

:::demo avatar/demos/DemoAvatar
<DemoAvatar />
:::

## Placeholder

By default, the avatar will display a placeholder icon if no `src` or `label` props are set.

:::demo avatar/demos/DemoAvatarPlaceholder
<DemoAvatarPlaceholder />
:::

## Square

If you wish for it to fill a rectangular surface, set the square prop.

:::demo avatar/demos/DemoAvatarSquare
<DemoAvatarSquare />
:::

## Name

With a `name` and no `src`, avatar will display up to three initial words of the label letters.

:::demo avatar/demos/DemoAvatarInitials
<DemoAvatarInitials />
:::

## Label

You can set custom text value when no `src` is set, using the `label` prop.

:::demo avatar/demos/DemoAvatarLabel
<DemoAvatarLabel />
:::

## Badge

Avatars are often combined with different badges. Here is an example.

:::demo avatar/demos/DemoAvatarBadge
<DemoAvatarBadge />
:::

## Styling

You can adjust the avatar style using simple tailwind class attributes on the component.
Note that the classes need to have stronger [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

If adding classes directly to the avatar component, use `!bg-black` instead of `bg-black`.

:::demo avatar/demos/DemoAvatarColor
<DemoAvatarColor />
:::

## Size

:::demo avatar/demos/DemoAvatarSize
<DemoAvatarSize />
:::
