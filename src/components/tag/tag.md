<script setup>
import DemoTag from '@/components/tag/demos/DemoTag.vue'
import DemoTagShape from '@/components/tag/demos/DemoTagShape.vue'
import DemoTagClosable from '@/components/tag/demos/DemoTagClosable.vue'
import DemoTagLink from '@/components/tag/demos/DemoTagLink.vue'
import DemoTagIcon from '@/components/tag/demos/DemoTagIcon.vue'
import DemoTagTooltip from '@/components/tag/demos/DemoTagTooltip.vue'
import DemoTagVariants from '@/components/tag/demos/DemoTagVariants.vue'
</script>

# Tag

:::demo tag/demos/DemoTag
<DemoTag />
:::

## Closable

:::demo tag/demos/DemoTagClosable
<DemoTagClosable />
:::

## Variants

Note: you can add a `filled` property to the tag and it will use a stronger background color, flipping to white text for readability purposes.

:::demo tag/demos/DemoTagVariants
<DemoTagVariants />
:::

## Shape

Available shapes are `square`, `rounded` and the default `round`. Use this property to make the tags visually separate from other components. For example, if your buttons are all `round`, you may want to use `rounded` tags accross your app.

:::demo tag/demos/DemoTagShape
<DemoTagShape />
:::

## Tooltip

:::demo tag/demos/DemoTagTooltip
<DemoTagTooltip />
:::

## Icon

:::demo tag/demos/DemoTagIcon
<DemoTagIcon />
:::

## Link

<!--@include: ../../ui-vue/composables/use-router-link.short.md-->

:::demo tag/demos/DemoTagLink
<DemoTagLink />
:::
