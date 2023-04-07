---
title: Getting started with WyrdUI
lang: en-US
---

# Getting started

## Install packages

Add wyrd-ui and it's peer dependency packages

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

## Load the vue app plugin and styles

```ts{2,3,6}
import { createApp } from 'vue'
import { WyrdUI } from 'wyrd-ui'
import '@/dist/style.css'

const app = createApp(App)
app.use(WyrdUI)
```

## UnoCSS Preset

**WyrdUI** provides an **UnoCSS** preset that extends [UnoCSS](https://github.com/unocss/unocss) [preset Wind](https://github.com/unocss/unocss/tree/main/packages/preset-wind) so it includes most of [TailwindCSS](https://tailwindcss.com/) classess and utilities.

This preset adds rules and shortcut classes, adopting the theme configuration you provide to the preset.

```ts{12,22-24}
// unocss.config.ts
import {
  defineConfig,
  presetWind,
  presetTypography,
  presetIcons,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetWyrd, themeDefault } from 'wyrd-ui'

export function createConfig({ strict = true, dev = true } = {}): any {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    presets: [
      presetWind(),              // Required
      presetIcons({              // Required
        prefix: 'icon-',
      }),
      presetWyrd({               // Required
        theme: themeDefault,     // Change theme here
      }),
      presetTypography({}),
    ],
    transformers: [
      transformerVariantGroup(), // Required
      transformerDirectives(),   // Required
      transformerCompileClass(), // Required
    ],
  })
}

export default createConfig()
```

## Using Vite

If you are using [Vite](https://vitejs.dev/), you can use [Unplugin Vue Components](https://github.com/antfu/unplugin-vue-components) and our component resolver to automatically load all components prefixed with Wui from wyrd-ui:

```ts{2,6-13}
// vite.config.ts
import Components from 'unplugin-vue-components/vite'
import { WuiComponentResolver } from 'wyrd-ui/component-resolver'

export default {
  plugins: [
    Components({
      resolvers: [
        WuiComponentResolver,
      ],
    }),
  ],
}
```

and simply use the components in your template code:

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
