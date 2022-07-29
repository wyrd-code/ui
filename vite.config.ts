/* eslint-disable import/no-unresolved */
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import postcssImport from 'postcss-import'
import postcssNested from 'postcss-nested'
import { visualizer } from 'rollup-plugin-visualizer'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
  build: {
    emptyOutDir: true,
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'wyrd-ui',
      fileName: 'index',
      // formats: [
      //   'es', // generates .js (for type=module) or .mjs file (for node)
      //   'cjs', // generates .js file
      //   'umd', // generates umd file
      // ],
    },
    rollupOptions: {
      // preserveModules: true, // vite (v2.9.9) tree shaking doesn't work without this
      external: ['vue', 'vue-router'],
      output: {
        // inlineDynamicImports: true,
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
        },
      },
    },
  },
  plugins: [
    vue(),
    svgLoader(),
    Unocss(),
    dts({
      root: '.',
      entryRoot: 'src',
    }),
    Components({
      dts: false,
      resolvers: [
        (componentName) => {
          if (componentName.startsWith('Wui'))
            return { name: componentName.slice(3), from: './src/components' }
        },
      ],
    }),
    // https://github.com/btd/rollup-plugin-visualizer
    visualizer({
      open: false,
      title: 'Wyrd UI Bundle Visualizer',
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssImport,
        postcssNested({
          bubble: ['screen'],
        }),
      ],
    },
  },
})
