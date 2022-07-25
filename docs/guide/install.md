---
title: Getting started with WyrdUi
lang: en-US
---

# Getting started

## Add wyrd-ui and it's peer dependency packages

npm

```
npm install wyrd-ui
```

yarn
```
yarn add wyrd-ui
```

pnpm
```
pnpm i wyrd-ui
```

## Load the plugin and styles

```ts{2,3,6}
import { createApp } from 'vue'
import { WyrdUI } from 'wyrd-ui'
import 'wyrd-ui/dist/style.css'

const app = createApp(App)
app.use(WyrdUI)
```


## Load Vite component loader plugins (optional)

If you are using (Vite)[https://vitejs.dev/] you can instead use (Unplugin Vue Components)[https://github.com/antfu/unplugin-vue-components] and add this component resolver to it's configuration:

```ts{2,6-13}
// vite.config.ts
import Components from 'unplugin-vue-components/vite'

export default {
  plugins: [
    Components({
      resolvers: [
        (componentName) => {
          if (componentName.startsWith('Wui'))
            return { name: componentName.slice(3), from: 'wyrd-ui' }
        },
      ],
    }),
  ],
}
```

In that case, you can just use the components in your template code:

```vue
<template>
  <WuiButton>Your button</WuiButton>
</template>
```

## Loading components manually

The other way to use components is to directly import them where you need them

```vue
<template>
  <WuiButton>Your button</WuiButton>
</template>

<script lang="ts" setup>
import { WuiButton } from 'wyrd-ui'
</script>
```

## VSCode typescript support

If you are using Volar, you can specify global component types by configuring typescript compilerOptions.types.

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["wyrd-ui/volar"]
  }
}
```
