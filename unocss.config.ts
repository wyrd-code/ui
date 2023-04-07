import {
  defineConfig,
  presetTypography,
  presetIcons,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetRadix } from './src/preset/preset-radix'
import { presetWyrd } from './src/preset/preset-wyrd'

export function createConfig({ strict = true, dev = true } = {}): any {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    presets: [
      presetTypography({}),
      presetIcons({
        prefix: 'icon-',
        extraProperties: {
          display: 'inline-block',
          'vertical-align': 'middle',
          color: 'inherit',
        },
      }),
      presetRadix({
        prefix: '--wui-color-',
        palette: ['mauve', 'mint', 'yellow', 'lime', 'sky', 'tomato', 'amber'],
        aliases: {
          neutral: 'mauve',
          primary: 'mint',
          secondary: 'yellow',
          info: 'sky',
          warn: 'amber',
          danger: 'tomato',
          success: 'lime',
        },
      }),
      presetWyrd(),
    ],
    transformers: [
      transformerVariantGroup(),
      transformerDirectives(),
      transformerCompileClass(),
    ],
  })
}

export default createConfig()
