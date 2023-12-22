import type {
  Preset,
  StaticShortcutMap,
  DynamicShortcut,
  StaticShortcut,
} from '@unocss/core'
import {
  PresetWindOptions,
  Theme,
  rules as presetWindRules,
  shortcuts as presetWindShortcuts,
  variants as presetWindVariants,
  preflights as presetWindPreflights,
  theme as themeWind,
} from '@unocss/preset-wind'

import {
  buildThemeFromSpec,
  WUI_THEME_SPEC,
  WuiThemeOptions,
} from '../../domain'
import { WUI_THEME_DEFAULT } from '../../themes/default'
import { mergeObjects } from '../../utilities'
import { getColorSafelistFromSpec, getColorCSS } from './color'

export type ShortcutList = (
  | StaticShortcutMap
  | StaticShortcut
  | DynamicShortcut<Theme>
)[]

export interface PresetWyrdOptions extends PresetWindOptions {
  theme?: Theme
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

  /**
   * Extend instead of override the default theme
   * @default false
   */
  extend?: boolean
}

export const presetWyrd = (options: PresetWyrdOptions = {}): Preset<Theme> => {
  const wyrdTheme = buildThemeFromSpec(WUI_THEME_SPEC)
  const theme = mergeObjects<Theme>(themeWind, wyrdTheme)

  const themeOptions = mergeObjects(
    WUI_THEME_DEFAULT,
    options.theme
  ) as WuiThemeOptions

  const {
    prefix = '--wui',
    darkSelector = '.dark',
    lightSelector = ':root, .light',
    // palette: selectedPallete,
    // aliases: selectedAliases = {},
    // extend = false,
  } = options

  return {
    name: 'unocss-preset-wyrd',
    theme,
    rules: [...presetWindRules],
    shortcuts: [
      ...presetWindShortcuts,
      {
        // 'island-sm': 'p-4 w-full flex',
        // 'island-border': 'border',
        'form-control': 'text-base font-sans transition-all duration-200',
        'form-control__border':
          'border border-solid border-neutral-8 hover:(border-blue-7) transition-all duration-200',
        'form-control__surface':
          'bg-neutral-1 text-neutral-11 focus:(bg-white)',
        'form-control--disabled':
          'bg-neutral-3 text-neutral-9 cursor-not-allowed',
        'form-control__outline': `focus:(form-control__outline_style)`,
        'form-control__outline_style': `outline outline-2 outline-offset-2 outline-blue-500/50`,
      },
    ],
    safelist: [...getColorSafelistFromSpec(WUI_THEME_SPEC.color)],
    variants: presetWindVariants(options),
    // options,
    // prefix: options.prefix,
    // extendTheme(theme: Theme) {
    //   theme.colors = {
    //     ...colors,
    //     ...aliases,
    //     // ...hues,

    //     white: "#ffffff",
    //     black: "#000000",
    //     transparent: "transparent",
    //     current: "currentColor",
    //     inherit: "inherit",

    //     ...(extend ? theme.colors : []),
    //   } as Theme["colors"];
    // },
    preflights: [
      ...presetWindPreflights,
      {
        // getCSS: () => genCSS(palette, darkSelector, lightSelector, prefix),
        getCSS: () =>
          getColorCSS(themeOptions, lightSelector, darkSelector, prefix),
      },
    ],
  }
}

export default presetWyrd
