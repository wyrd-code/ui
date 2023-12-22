import type {
  Preset,
  StaticShortcutMap,
  DynamicShortcut,
  StaticShortcut,
} from '@unocss/core'
import type { PresetWindOptions, Theme } from '@unocss/preset-wind'
import {
  rules as presetWindRules,
  shortcuts as presetWindShortcuts,
  variants as presetWindVariants,
  preflights as presetWindPreflights,
  theme as themeWind,
} from '@unocss/preset-wind'
// import { isObject, mapEntries } from 'radash'

import type { RadixColors } from './radix'
import // mergeObjects,
// kebabCase,
'../../utilities'
import {
  genCSS,
  generateColors,
  // generateHues,
  newPalette,
  ColorAliases,
  generateColorAliases,
} from './colors'

export type ShortcutList = (
  | StaticShortcutMap
  | StaticShortcut
  | DynamicShortcut<Theme>
)[]

export interface PresetWyrdOptions extends PresetWindOptions {
  theme?: Theme
  palette?: readonly RadixColors[]
  /**
   * The prefix of the generated css variables
   * @default --un-preset-radix
   */
  prefix?: string

  /**
   * Customize the selector used to apply the dark versions of the color palette
   * @default ".dark-theme"
   */
  darkSelector?: string

  /**
   * Customize the selector used to apply the light versions of the color palette
   * @default ":root, .light-theme"
   */
  lightSelector?: string

  /** Add color aliases */
  aliases?: ColorAliases

  /**
   * Extend instead of override the default theme
   * @default false
   */
  extend?: boolean
}

export const presetWyrd = (options: PresetWyrdOptions = {}): Preset<Theme> => {
  // const unoTheme = buildThemeFromSpec(WUI_THEME_SPEC)
  // theme: mergeObjects<Theme>(themeWind, compiledTheme),
  const theme = themeWind
  const {
    prefix = '--un-preset-radix-',
    darkSelector = '.dark-theme',
    lightSelector = ':root, .light-theme',
    palette: selectedPallete,
    aliases: selectedAliases = {},
    extend = false,
  } = options
  const defaultPallete = []
  const finalPallete = Array.isArray(selectedPallete)
    ? selectedPallete
    : defaultPallete
  const palette = newPalette(...finalPallete)
  const colors = generateColors(palette, prefix)
  // const hues = generateHues(prefix);
  const aliases = generateColorAliases(colors, selectedAliases)
  const colorRules = []

  return {
    name: '@wyrdui/preset-wyrd',
    theme,
    rules: [
      ...presetWindRules,
      ...colorRules,
      // [/^text-(.*)$/, ([, color], { theme }) => {
      //   if (theme.colors && theme.colors[color]) {
      //     return theme.colors[color]
      //   }
      // }],
      // [
      //   /^hue-(.+)$/,
      //   ([_, color], { theme }) => {
      //     let target: string = "";

      //     console.log(theme.colors)

      //     if (finalPallete.includes(color as RadixColors)) {
      //       target = color;
      //     } else if (color in selectedAliases) {
      //       target = selectedAliases[color];
      //     }

      //     if (target) {
      //       let css: Record<string, string> = {};

      //       for (let shade = 1; shade <= 12; shade++) {
      //         css[`${prefix}hue${shade}`] = `var(${prefix}${target}${shade})`;
      //         css[`${prefix}hue${shade}A`] = `var(${prefix}${target}${shade}A)`;
      //       }
      //       css[`${prefix}hue-fg`] = `var(${prefix}${target}-fg)`;

      //       return css;
      //     }

      //     return {};
      //   },
      // ],
    ],
    shortcuts: [
      ...presetWindShortcuts,
      {
        'border-base': 'border-gray-200',
      },
    ],
    safelist: [
      // ...getColorSafelistFromSpec(WUI_THEME_SPEC.color),
    ],
    variants: presetWindVariants(options),
    // options,
    // prefix: options.prefix,
    extendTheme(theme: Theme) {
      theme.colors = {
        ...colors,
        ...aliases,
        // ...hues,

        white: '#ffffff',
        black: '#000000',
        transparent: 'transparent',
        current: 'currentColor',
        inherit: 'inherit',

        ...(extend ? theme.colors : []),
      } as Theme['colors']
    },
    preflights: [
      ...presetWindPreflights,
      {
        getCSS: () => genCSS(palette, darkSelector, lightSelector, prefix),
        // getCSS: () => getRootVariableDeclarations(themeOptions),
      },
    ],
  }
}

export default presetWyrd
