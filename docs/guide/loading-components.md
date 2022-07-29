# Loading components

## Loading manualy

The default way to use components is to directly import them where you need them

```vue
<template>
  <WuiButton>Your button</WuiButton>
</template>

<script lang="ts" setup>
import { WuiButton } from 'wyrd-ui'
</script>
```

## Auto loading

The other option is to setup vite plugin to auto load components, as described in the install guide.

In that case, you can just use the components in your template code:

```vue
<template>
  <WuiButton>Your button</WuiButton>
</template>
```
