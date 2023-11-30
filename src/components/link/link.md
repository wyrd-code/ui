<script setup>
import DemoLink from '@/components/link/demos/DemoLink.vue'
</script>

# Link

Use `WuiLink` to link to different pages and urls.

It will appear as `<router-link>` if you pass it the `to` prop, and `<a>` if you pass it the `href` prop.

:::demo components/link/demos/DemoLink
<DemoLink />
:::

## Usage

The purpose of this component is to encapsulate all link handling, interaction and presentation. Using it allows for simpler extending and modifying of links accross your whole app.
