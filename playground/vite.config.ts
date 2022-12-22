/* eslint-disable import/no-unresolved */
// import { fileURLToPath, URL } from 'url'
// import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
// import postcssAtRulesVariables from 'postcss-at-rules-variables'
// import postcssCustomProperties from 'postcss-custom-properties'
// import postcssEach from 'postcss-each'
import { defineConfig } from 'vite'

import viteConfigBase from './../vite.config.base'

// https://vitejs.dev/config/
export default defineConfig({
  ...viteConfigBase,
  publicDir: '../public',
  // resolve: {
  //   alias: {
  //     '@': resolve(process.cwd()),
  //     // '@': fileURLToPath(new URL('./', import.meta.url)),
  //     // '@wyrdui': fileURLToPath(new URL('./', import.meta.url)),
  //   },
  // },
  // build: {
  //   emptyOutDir: true,
  //   sourcemap: false,
  //   lib: {
  //     entry: resolve(__dirname, 'src/index.ts'),
  //     name: 'wyrd-ui',
  //     fileName: 'index',
  //     // formats: [
  //     //   'es', // generates .js (for type=module) or .mjs file (for node)
  //     //   'cjs', // generates .js file
  //     //   'umd', // generates umd file
  //     // ],
  //   },
  //   rollupOptions: {
  //     // preserveModules: true, // vite (v2.9.9) tree shaking doesn't work without this
  //     external: ['vue', 'vue-router'],
  //     output: {
  //       // inlineDynamicImports: true,
  //       globals: {
  //         vue: 'Vue',
  //         'vue-router': 'VueRouter',
  //       },
  //     },
  //   },
  // },
  plugins: [vue(), ...viteConfigBase.plugins],
})
