<script setup>
import DemoCard from '@/components/card/demos/DemoCard.vue'
import DemoCardCondensed from '@/components/card/demos/DemoCardCondensed.vue'
import DemoCardDivided from '@/components/card/demos/DemoCardDivided.vue'
import DemoCardHorizontal from '@/components/card/demos/DemoCardHorizontal.vue'
import DemoCardHorizontalDivided from '@/components/card/demos/DemoCardHorizontalDivided.vue'
import DemoCardInverse from '@/components/card/demos/DemoCardInverse.vue'
import DemoCardUnpadded from '@/components/card/demos/DemoCardUnpadded.vue'
import DemoCardDisabled from '@/components/card/demos/DemoCardDisabled.vue'
import DemoCardImageOverlay from '@/components/card/demos/DemoCardImageOverlay.vue'
import DemoCardProfile from '@/components/card/demos/DemoCardProfile.vue'
</script>

# Card

Cards are used to display a collection of related items and actions in a modular, easy-to-read way. There are four main areas to the card component: Top, Preview, Content and Action area.

They’re also well-suited for showcasing elements whose size or supported actions vary, like photos with captions of variable length.

## Slots

Use slots `top`, `preview`, `header`, `actions` and `default` to build your card.

:::demo components/card/demos/DemoCard
<DemoCard />
:::

## Condensed

Use the `condensed` prop to reduce internal padding in the card slots.

:::demo components/card/demos/DemoCardCondensed
<DemoCardCondensed />
:::

## Unpadded

Use the `unpadded` prop to remove internal padding in the card slots.

:::demo components/card/demos/DemoCardUnpadded
<DemoCardUnpadded />
:::

## Horizontal

Use the `horizontal` prop to reduce internal padding in the card slots.

:::demo components/card/demos/DemoCardHorizontal
<DemoCardHorizontal />
:::

## Inverse

Use the `inverse` prop to switch the flex order of `media` and `body` slots.

:::demo components/card/demos/DemoCardInverse
<DemoCardInverse />
:::

## Divided

Use the `divided` prop to add internal borders to the card slots.

:::demo components/card/demos/DemoCardDivided
<DemoCardDivided />
:::

The `divided` prop adopts to presence of the `top` slot and `horizontal` prop.

:::demo components/card/demos/DemoCardHorizontalDivided
<DemoCardHorizontalDivided />
:::

## Disabled

:::demo components/card/demos/DemoCardDisabled
<DemoCardDisabled />
:::

## Image card

:::demo components/card/demos/DemoCardImageOverlay
<DemoCardImageOverlay />
:::

## Profile Card

:::demo components/card/demos/DemoCardProfile
<DemoCardProfile />
:::

## Best practice

A card layout works best when

- You have multiple content types like images, texts, CTA buttons etc.
- You have content types of variable lengths
- A user doesn’t have to compare images or texts
- There is some sort of interaction like a link, like and share buttons etc

## Accessibility

Always pass an `alt` prop to the card image.

- When creating a tab order for the different parts of the card, remember to put the headline before the image or media so that screen-reader users get the context before the image alt tag.
- When passing custom interactive component (i.e. video) as card media remember to take care of making the media component `visible` for screen readers by adding tabindex if necessary.
- Add `aria-label` prop to allow a user to describe the action that will be performed when the user interacts with the card. By default, this could be the headline text.
- When nesting other components of the card, always follow those components' accessibility guidelines.
