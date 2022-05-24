/* eslint-disable import/no-unresolved */
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import anchor from 'markdown-it-anchor'
// import { visualizer } from 'rollup-plugin-visualizer'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'vite-plugin-md'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default {
  build: {
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: resolve(process.cwd(), 'src/exports'),
      name: 'WyrdUI',
      fileName: (format: string): string => `index.${format}.js`,
    },
    rollupOptions: {
      // vite (v2.9.9) tree shaking doesn't work without this
      // preserveModules: true,
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'vue-router', '@vue/runtime-dom', '@vueuse/core'],
      output: {
        // inlineDynamicImports: true,
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          '@vueuse/core': 'VueUseCore',
        },
      },
    },
  },
  optimizeDeps: {
    include: [],
    exclude: [
      'vue',
      'body-scroll-lock',
      'vue-router',
      '@vue/runtime-dom',
      '@vueuse/core',
      'vue-demi',
    ],
  },
  resolve: {
    alias: {
      '~': resolve(process.cwd(), 'src'),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      headEnabled: true,
      wrapperClasses: 'markdown-body',
      // default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup(md: any) {
        md.use(require('markdown-it-footnote'))
        // md.use(require('markdown-it-deflist'))
        md.use(require('markdown-it-prism'))
        md.use(require('markdown-it-emoji/light'), {})
        md.use(anchor, {
          permalink: anchor.permalink.linkInsideHeader({
            symbol: `
              <span class="hidden">Jump to heading</span>
              <span aria-hidden="true">#</span>
            `,
            placement: 'before',
            space: false,
          }),
        })
        // md.use(require('markdown-it-toc-done-right'), {
        //   listType: 'ul',
        //   level: 1,
        // })
      },
    }),
    // https://github.com/jpkleemans/vite-svg-loader
    svgLoader(),
    // https://github.com/antfu/vite-plugin-components
    Components({
      dirs: ['src'],
      dts: 'volar.d.ts',
      extensions: ['vue', 'md'],
    }),
    // https://github.com/unocss/unocss
    Unocss(),
    // https://github.com/btd/rollup-plugin-visualizer
    // visualizer({
    //   open: false,
    //   title: 'WyrdUI Bundle Visualizer',
    // }),
  ],
  css: {
    postcss: {
      plugins: [
        require('postcss-import'),
        require('postcss-nested')({
          bubble: ['screen'],
        }),
      ],
    },
  },
}
