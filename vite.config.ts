import presetIcons from '@unocss/preset-icons'
import { presetTypography } from '@unocss/preset-typography'
import transformerDirective from '@unocss/transformer-directives'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'pathe'
import { presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    // https://github.com/jpkleemans/vite-svg-loader
    svgLoader(),
    // https://github.com/antfu/vite-plugin-components
    Components({
      dirs: ['src'],
      dts: 'volar.d.ts',
      extensions: ['vue'],
    }),
    // https://github.com/unocss/unocss
    Unocss({
      transformers: [
        transformerDirective(),
      ],
      presets: [
        presetUno({}),
        presetTypography({}),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ]
    }),
  ],
  optimizeDeps: {
    include: [
    ],
    exclude: [
      'vue',
      'vue-router',
      '@vueuse/core',
      'vue-demi',
    ],
  },
});