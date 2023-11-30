<script setup>
import DemoBreadcrumbs from '@/components/breadcrumbs/demos/DemoBreadcrumbs.vue'
import DemoBreadcrumbsSize from '@/components/breadcrumbs/demos/DemoBreadcrumbsSize.vue'
import DemoBreadcrumbsIcons from '@/components/breadcrumbs/demos/DemoBreadcrumbsIcons.vue'
</script>

# Breadcrumbs

Breadcrumbs help users visualize the current page position within the hierarchical structure of a website, and allow quickly jumping to any of the "ancestors" of the current page.

:::demo components/breadcrumbs/demos/DemoBreadcrumbs
<DemoBreadcrumbs />
:::

## Size

Control size using regular css font-size property of the containing element.

:::demo components/breadcrumbs/demos/DemoBreadcrumbsSize
<DemoBreadcrumbsSize />
:::

## Icons

:::demo components/breadcrumbs/demos/DemoBreadcrumbsIcons
<DemoBreadcrumbsIcons />
:::

## Automatic routes

If you are using [VueRouter](https://router.vuejs.org/) you can also use the `WuiBreadcrumbsAuto` component to automatically fill the breadcrumbs from the list of currently matched routes.

## Accessibility

[WAI-ARIA breadcrumb](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)

Be sure to add a `aria-label` description on the Breadcrumbs component.

The accessibility of this component relies on:

- The set of links is structured using an ordered list (`<ol>` element).
- To prevent screen reader announcement of the visual separators between links, they are hidden with aria-hidden.
- A nav element labeled with aria-label identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.
