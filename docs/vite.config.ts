/* eslint-disable import/no-unresolved */
import { resolve } from 'path'

import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default {
  resolve: {
    alias: {
      '~': resolve(process.cwd(), 'src'),
      '@': resolve(process.cwd(), 'docs'),
    },
  },
  plugins: [
    Unocss(),
    Components({
      // Note: generated types are gitignored because they often update after comit
      // leading to subtle changes between code and types
      dts: true,
      resolvers: [
        (componentName) => {
          if (componentName.startsWith('Wui'))
            return { name: componentName.slice(3), from: './src/components' }
        },
      ],
    }),
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
