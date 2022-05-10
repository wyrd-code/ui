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
    theme: {
      fontFamily: {
        sans: '\'Inter\', sans-serif',
        mono: '\'Fira Code\', monospace',
      },
    },
    presets: [
      presetWind(),
      presetTypography({}),
      presetIcons({
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
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


// textColors: {
  // accent
  // neutral
  // success
  // warning
  // danger
  // primary
  // link
  // info
// },
