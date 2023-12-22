/* eslint-disable import/no-unresolved */
import VuePlugin from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

import config from './vite.config.base'

export default defineConfig({
  ...config,
  test: {
    globals: true,
    environment: 'jsdom',
  },
  plugins: [VuePlugin(), ...(config.plugins || [])],
})
