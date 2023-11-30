<script setup>
import DemoButtonStretch from '@/components/button/demos/DemoButtonStretch.vue'
import DemoButtonIcon from '@/components/button/demos/DemoButtonIcon.vue'
import DemoButtonLink from '@/components/button/demos/DemoButtonLink.vue'
import DemoButtonShapes from '@/components/button/demos/DemoButtonShapes.vue'
import DemoButtonSizes from '@/components/button/demos/DemoButtonSizes.vue'
import DemoButtonVariantSystem from '@/components/button/demos/DemoButtonVariantSystem.vue'
import DemoButtonVariantGhost from '@/components/button/demos/DemoButtonVariantGhost.vue'
import DemoButtonVariantOutlined from '@/components/button/demos/DemoButtonVariantOutlined.vue'
import DemoButtonVariantPrimary from '@/components/button/demos/DemoButtonVariantPrimary.vue'
import DemoButtonVariant from '@/components/button/demos/DemoButtonVariant.vue'
import DemoButtonVariantSecondary from '@/components/button/demos/DemoButtonVariantSecondary.vue'
</script>

# Button

For user triggered actions.

## Variants

Each button variant has a particular function and its design signals that function to the user. It is therefore very important that the different variants are implemented consistently across products, so that they convey consistent meaning to users.

:::demo components/button/demos/DemoButtonVariant
<DemoButtonVariant />
:::

### Primary

For primary call to action on the page. Primary buttons should only appear once per screen. Modal dialogs, sidebars and similar overlaid components.

:::demo components/button/demos/DemoButtonVariantPrimary
<DemoButtonVariantPrimary />
:::

### Secondary

For secondary actions on each page. Secondary buttons can only be used in conjunction with a primary button. As part of a pair, the secondary button’s function is to perform the negative action of the set, such as “Cancel” or “Back”. Do not use a secondary button in isolation and do not use a secondary button for a positive action.

:::demo components/button/demos/DemoButtonVariantSecondary
<DemoButtonVariantSecondary />
:::

### Outlined

For less prominent, and sometimes independent, actions. Outlined buttons can be used in isolation or paired with a primary button when there are multiple calls to action. Outlined buttons can also be used for sub-tasks on a page where a primary button for the main and final action is present.

:::demo components/button/demos/DemoButtonVariantOutlined
<DemoButtonVariantOutlined />
:::

### Ghost

For the least pronounced actions; often used in conjunction with a primary button. In a situation such as a progress flow, a ghost button may be paired with a primary and secondary button set, where the primary button is for forward action, the secondary button is for “Back”, and the ghost button is for “Cancel”.

:::demo components/button/demos/DemoButtonVariantGhost
<DemoButtonVariantGhost />
:::

### Systen variants

Buttons also support system variants: info, success, warning and danger.

:::demo components/button/demos/DemoButtonVariantSystem
<DemoButtonVariantSystem />
:::

## Sizes

:::demo components/button/demos/DemoButtonSizes
<DemoButtonSizes />
:::

## Stretch

:::demo components/button/demos/DemoButtonStretch
<DemoButtonStretch />
:::

## Shapes

:::demo components/button/demos/DemoButtonShapes
<DemoButtonShapes />
:::

## Icon

- Use the `icon` (bool) prop to adjust padding for icons

:::demo components/button/demos/DemoButtonIcon
<DemoButtonIcon />
:::

## Link

<!--@include: ../../ui-vue/composables/use-router-link.short.md-->

:::demo components/button/demos/DemoButtonLink
<DemoButtonLink />
:::

## Accessibility

Buttons can have different states that are visually and programmatically conveyed to merchants.

- Use the `ariaControls` prop to add an aria-controls attribute to the button. Use the attribute to point to the unique id of the content that the button manages.
- If a button stretchs or collapses adjacent content, then use the `ariaStretched` prop to add the aria-stretched attribute to the button. Set the value to convey the current stretched (true) or collapsed (false) state of the content.
- Use the `ariaPressed` prop to add an aria-pressed attribute to the button.
- Use the `disabled` prop to set the disabled state of the button. This prevents merchants from being able to interact with the button, and conveys its inactive state to assistive technologies.

### Labeling

The `accessibilityLabel` prop adds an `aria-label` attribute to the button, which can be accessed by assistive technologies like screen readers. Typically, this label text replaces the visible text on the button for people who use assistive technology.

Use accessibilityLabel for a button if:

- The button’s visible text doesn’t adequately convey the purpose of the button to non-visual users
- The button has no text and relies on an icon alone to convey its purpose

### External links

When you use the button component to create a link to an external resource:

- Use the external prop to make the link open in a new tab (or window, depending on the merchant’s browser settings)
- Use the `accessibilityLabel` prop to include the warning about opening a new tab in the button text for non-visual screen reader users
- For more information on making accessible links, see the [link component](/components/link/link.html).

## Reading list

- [Designing the perfect button](https://wix-ux.com/designing-the-perfect-button-e77ec1f32ee5)
