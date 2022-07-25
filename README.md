# WYRD UI

A fairly modern Vue 3 component library.

[![npm (scoped)](https://img.shields.io/npm/v/wyrd-ui)](https://www.npmjs.com/package/wyrd-ui)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/wyrd-ui)](https://bundlephobia.com/result?p=wyrd-ui@latest)
[![NPM](https://img.shields.io/npm/l/wyrd-ui)](https://github.com/wyrd-code/ui/blob/main/LICENSE)

## Install

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


### Utilities and constants

The library includes example utilities and constants. They are also exported in
[index.ts](src/index.ts). The client app may use them as below:

```js
<script lang="ts">
import { MyConstants, MyUtil } from 'my-lib'

export default {
  data () {
    return {
      magicNum: MyConstants.MAGIC_NUM
    }
  },
  methods: {
    add (a:number, b:number) {
      return MyUtil.add(a, b)
    }
  }
}
</script>
```

### Styling

Individual compopnent may have styles defined in its `.vue` file. They will be processed,
combined and minified into `dist/style.css`, which is included in the `exports` list in
[package.json](package.json).

If you have library level styles shared by all components in the library, you may add them
to [src/assets/main.scss](src/assets/main.scss). This file is imported in
[index.ts](src/index.ts), therefore the processed styles are also included into
`dist/style.css`. To avoid conflicting with other global styles, consider pre-fixing the
class names or wrapping them into a namespace class.

If you have your own special set of SVG icons, you may create a font file (`.woff` format)
using tools like [Icomoon](https://icomoon.io/) or [Fontello](https://fontello.com/). This
starter includes an example font file
[src/assets/fonts/myfont.woff](src/assets/fonts/myfont.woff) and references it in
[src/assets/main.scss](src/assets/main.scss), with utility icon CSS classes. An icon from
the font file is used in Component A. Vite will include the font file into the build, see
[https://vitejs.dev/guide/assets.html](https://vitejs.dev/guide/assets.html).

The client app shall import `style.css`, usually in the entry file:

```js
import 'my-lib/dist/style.css'
```

### Third-party dependencies

Third-party libraries used by you library may bloat up the size of your library, if you
simply add them to the `dependencies` in [package.json](package.json).

The following are some strategies to reduce the size of your library:

#### Externalization

If you expect the client app of your library may also need the same dependency, you may
externalize the dependency. For example, to exclude WyrdUI from your library build
artifact, in [vite.config.ts](vite.config.ts), you may have

```js
module.exports = defineConfig({
    rollupOptions: {
      external: ['vue', 'wyrd-ui']
    }
  }
})
```

The dependency to be externalized may be declared as peer dependency in your library.

#### Cherry picking

If you don't expect the client app of your library also needing the same dependency, you
may embed cherry-picked functions. For example, to embed the `fill` function of popular
library [lodash](https://lodash.com), import the `fill` function like the following:

```js
import fill from 'lodash/fill'
```

Even with tree-shaking, the codes being brought into your library may still be large, as
the function may have its own dependencies.

Note that `import { fill } from 'lodash'` or `import _ from 'lodash'` will not work and
will embed the whole `lodash` library.

Finally, if your client app also use `lodash` and you don't want `lodash` to be in both
the client app and your libraries, even after cherry-picking, you may consider
cherry-picking in component library and re-export them as utils for client to consume, so
that the client does not need to depend on `lodash`, therefore avoiding duplication.


### Type generation

In [tsconfig.json](tsconfig.json), the following options instructs `tsc` to emit
declaration (`.d.ts` files) only, as `vite build` handles the `.js` file generation. The
generated `.d.ts` files are sent to `dist/types` folder.

```json
  "compilerOptions": {
    "declaration": true,
    "emitDeclarationOnly": true,
    "declarationDir": "./dist/types"
  }
```

In [package.json](package.json), the line below locates the generated types for library
client.

```json
  "types": "./dist/types/index.d.ts",
```

> In [vite.config.ts](vite.config.ts), `build.emptyOutDir` is set to `false` and `rimraf`
> is used instead to remove the `dist` folder before the build. This is to avoid the
> `dist/types` folder generated by `tsc` being deleted when running `vite build`.

### Configuration

#### TypeScript

In [tsconfig.json](tsconfig.js), `compilerOptions.isolatedModules` is set to `true` as
recommended by Vite (since esbuild is used). However, enableing this option leads to
[https://github.com/vitejs/vite/issues/5814](https://github.com/vitejs/vite/issues/5814).
The workaround is to also enable `compilerOptions.skipLibCheck`.

#### Dependencies

In [package.json](package.json), vue and wyrd-ui are declared in both `peerDependencies`
and `devDependencies`. The former requires the client app to add these dependencies, and
the later makes it easier to setup this library by simply running `npm install`.
