<script setup>
import DemoList from '@/components/list/demos/DemoList.vue'
import DemoListBordered from '@/components/list/demos/DemoListBordered.vue'
import DemoListDivided from '@/components/list/demos/DemoListDivided.vue'
import DemoListIcons from '@/components/list/demos/DemoListIcons.vue'
import DemoListLinked from '@/components/list/demos/DemoListLinked.vue'
import DemoListMarker from '@/components/list/demos/DemoListMarker.vue'
import DemoListMarkerPosition from '@/components/list/demos/DemoListMarkerPosition.vue'
import DemoListNested from '@/components/list/demos/DemoListNested.vue'
import DemoListRounded from '@/components/list/demos/DemoListRounded.vue'
import DemoListSize from '@/components/list/demos/DemoListSize.vue'
</script>

# List

Lists are a simple abstraction over html lists, providing some standardized formatting and behavior.

You can render the list child list items manualy, or you can simply pass in an array of string values or `WyrdListItem` typed objects to have it render automatically.

## Guidelines

Every item in a list should:
- Start with a capital letter
- Not use commas or semicolons at the end of each line

## Simple

:::demo components/list/demos/DemoList
<DemoList />
:::

## Marker

You can control list styling using the `marker` prop.

If you use `roman`, `latin`, `greek` or `numbered` marker, it will change the default `tag` prop from `<ul>` to `<ol>`. Passing a custom `tag` prop will override it.

:::demo components/list/demos/DemoListMarker
<DemoListMarker />
:::

## Marker position

To change the marker position, use `inside` or `outside` (default) as value for the `marker-position` prop.

Note that using an inside marker position will break the layout flow of the immediate child element of the list item, so `WuiList` will change the inner wrapper from a `div` to a `<span>` element.
Thus, we recommend only using the `inside` position for simple text based list items.

:::demo components/list/demos/DemoListMarkerPosition
<DemoListMarkerPosition />
:::

## Divided

You can add dividers between list elements using the `divided` prop.

:::demo components/list/demos/DemoListDivided
<DemoListDivided />
:::

## Bordered

To add default theme borders, add the `bordered` prop.

:::demo components/list/demos/DemoListBordered
<DemoListBordered />
:::

## Rounded

To use default corner rounding, add the `rounded` prop.

:::demo components/list/demos/DemoListRounded
<DemoListRounded />
:::

## Sizes

:::demo components/list/demos/DemoListSize
<DemoListSize />
:::

## Nested

If you have a hierarchical or recursive array of list items, you can display them recursively using the `children` property of each item. You can set it as an array of items or an object with an `items` property where any extra properties will be propagated to the child list component. Using the latter approach, you can customize the nested lists easily.

:::demo components/list/demos/DemoListNested
<DemoListNested />
:::

## Icons

:::demo components/list/demos/DemoListIcons
<DemoListIcons />
:::

## Linked

Use the `disabled` prop on `WuiListItem` to make the element disabled and non-interactive with a visual cue of the state.

:::demo components/list/demos/DemoListLinked
<DemoListLinked />
:::
