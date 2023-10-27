import {
  defineConfig,
  presetTypography,
  presetIcons,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

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
      presetWyrd({
      }),
    ],
    transformers: [
      transformerVariantGroup(),
      transformerDirectives(),
      transformerCompileClass(),
    ],
  })
}

export default createConfig()
