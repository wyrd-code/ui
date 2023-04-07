<script setup>
import DemoBadge from '@/components/badge/demos/DemoBadge.vue'
import DemoBadgeDot from '@/components/badge/demos/DemoBadgeDot.vue'
import DemoBadgeEmpty from '@/components/badge/demos/DemoBadgeEmpty.vue'
import DemoBadgeInline from '@/components/badge/demos/DemoBadgeInline.vue'
import DemoBadgeMax from '@/components/badge/demos/DemoBadgeMax.vue'
import DemoBadgePlacement from '@/components/badge/demos/DemoBadgePlacement.vue'
import DemoBadgeRounded from '@/components/badge/demos/DemoBadgeRounded.vue'
import DemoBadgeVariants from '@/components/badge/demos/DemoBadgeVariants.vue'
import DemoBadgeVisible from '@/components/badge/demos/DemoBadgeVisible.vue'
</script>

# Badge

Badges are round by default to keep close to the prevalent standard appearance of badges on the web.

:::demo badge/demos/DemoBadge
<DemoBadge />
:::

## Max

You can use the `max` prop to cap the value of the badge content.

:::demo badge/demos/DemoBadgeMax
<DemoBadgeMax />
:::

## Empty value

The badge hides automatically when `value` is zero. You can override this with the `showZero` prop.

:::demo badge/demos/DemoBadgeEmpty
<DemoBadgeEmpty />
:::

## Visible

You can use the `visible` prop to control badge visibility

:::demo badge/demos/DemoBadgeVisible
<DemoBadgeVisible />
:::

## Dot

You can use the `dot` prop to show a small circular badge.

:::demo badge/demos/DemoBadgeDot
<DemoBadgeDot />
:::

## Rounded

You can use the `rounded` prop to show a square shaped badge that is still rounded.

:::demo badge/demos/DemoBadgeRounded
<DemoBadgeRounded />
:::

## Placement

By default badges are placed as absolute positioned to the top right of their main slot content.
You can use the `placement` prop to change this.

:::demo badge/demos/DemoBadgePlacement
<DemoBadgePlacement />
:::

## Inline

You can use badges as inline elements instead of the default floating (absolute positioned). Simply place them where you like as inline elements with no slot content.

:::demo badge/demos/DemoBadgeInline
<DemoBadgeInline />
:::

## Variants

Use the `variant` prop to change the styling of within a limited set of standard system colors.

:::demo badge/demos/DemoBadgeVariants
<DemoBadgeVariants />
:::

##  Accessibility

You can't rely on the content of the badge to be announced correctly. You should provide a full description, for instance, with `aria-label`
