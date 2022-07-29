import {
  defineConfig,
  presetWind,
  presetTypography,
  presetIcons,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export function createConfig({ strict = true, dev = true } = {}): any {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    presets: [
      presetWind(),
      presetTypography({}),
      presetIcons({
        prefix: 'icon-',
        extraProperties: {
          display: 'inline-block',
          'vertical-align': 'middle',
          color: 'inherit',
        },
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
