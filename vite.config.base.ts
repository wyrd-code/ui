import { resolve } from 'path'

import postcssAtVariables from 'postcss-at-rules-variables'
// import postcssColorFunction from 'postcss-color-function'
// import postcssAtIf from 'postcss-conditionals'
import postcssAtEach from 'postcss-each'
// import postcssAtFor from 'postcss-for'
import postcssAtImport from 'postcss-import'
import postcssNested from 'postcss-nested'
import postcssPrefixer from 'postcss-prefix-selector'
// import { visualizer } from 'rollup-plugin-visualizer'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { UserConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

const config: UserConfig = {
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src'),
    },
  },
  plugins: [
    svgLoader(),
    Unocss(),
    Components({
      dts: false,
      resolvers: [
        (name) => {
          if (name.startsWith('Wui')) return { name, from: '@/components' }
        },
      ],
    }),
    // visualizer({
    //   open: false,
    //   title: 'Wyrd UI Bundle Visualizer',
    // }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssAtVariables({
          /* atRules: ['media'] */
        }),
        // postcssColorFunction(),
        postcssAtEach(),
        postcssAtImport({
          plugins: [
            postcssAtVariables,
            // postcssImport,
            // require('postcss-at-rules-variables')({ /* options */ }),
            // require('postcss-import')
          ],
        }),
        // postcssAtFor(),
        // postcssAtIf(),
        // postcssCssVariables(),
        postcssNested({
          bubble: ['screen'],
        }),
        // https://vitepress.vuejs.org/guide/markdown#custom-containers
        postcssPrefixer({
          prefix: ':not(:where(.vp-raw *))',
          includeFiles: [/vp-doc\.css/],
          transform(prefix, _selector) {
            const [selector, pseudo = ''] = _selector.split(/(:\S*)$/)
            return selector + prefix + pseudo
          },
        }),
      ],
    },
  },
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
}

export default config
