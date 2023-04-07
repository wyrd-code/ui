import type {
  Preset,
  StaticShortcutMap,
  DynamicShortcut,
  StaticShortcut,
} from '@unocss/core'
import type { PresetWindOptions, Theme } from '@unocss/preset-wind'
import {
  rules,
  shortcuts,
  variants,
  preflights,
  theme as themeWind,
} from '@unocss/preset-wind'
import { isObject, mapEntries } from 'radash'

import {
  WUI_THEME_SPEC,
  WuiThemeOptions,
  buildUnoThemeFromSpec,
  WuiColorValue,
  WuiColorValueScale,
  WuiColorValueDualScale,
  WUI_COLOR_SPEC,
  WuiColorValueType,
  WuiColorSpec,
  WuiColorStepDefinition,
} from '../../domain'
import { mergeObjects, kebabCase } from '../../utilities'
import { themeDefault } from './theme-default'

export type { WuiThemeOptions } from '../../domain/theme'

export type ShortcutList = (
  | StaticShortcutMap
  | StaticShortcut
  | DynamicShortcut<Theme>
)[]

export interface PresetWyrdOptions extends PresetWindOptions {
  theme?: WuiThemeOptions
}

// const convertColorValue = (
//   value: WuiColorValue
// ): string | Record<string, string> => {
//   console.log('CONVERT', value)
//   return {}
// }

// const convertThemeOptionsToPresetWind = (wuiTheme: WuiThemeOptions): Theme => {
//   const colors = mapEntries(wuiTheme.colors, (key, value) => {
//     // convert color value from Wui to regular UnoCSS preset style
//     const unoValue = convertColorValue(value)
//     return [key, unoValue]
//   })

//   const converted = {
//     colors,
//   }

//   return converted
// }

const isColorValueDualScale = (
  colorValue: WuiColorValue
): colorValue is WuiColorValueDualScale => {
  if (!isObject(colorValue)) {
    return false
  }
  const keys = Object.keys(colorValue)
  return keys.length === 2 && keys.includes('dark')
}

const isColorValueScale = (
  colorValue: WuiColorValue
): colorValue is WuiColorValueScale => {
  if (!isObject(colorValue)) {
    return false
  }
  const keys = Object.keys(colorValue)
  return keys.length === WUI_COLOR_SPEC.steps.length
}

const getColorValueScaleString = (
  colorKey: string,
  colorScale: WuiColorValueScale
) => {
  const mapped = Object.keys(colorScale).map((step: string) => {
    const value = colorScale[step]
    return `--wui-color-${kebabCase(colorKey)}-${kebabCase(step)}: ${value};`
  })

  // eslint-disable-next-line prettier/prettier
  return mapped.join("\n")
}

const getColorCSSVars = (
  colorKey: string,
  colorValue: WuiColorValue
): string => {
  if (isColorValueDualScale(colorValue)) {
    const { light, dark } = colorValue
    return `
      :root {
        ${getColorValueScaleString(colorKey, light)}
      }
      :root.dark {
        ${getColorValueScaleString(colorKey, dark)}
      }
    `
  }

  if (isColorValueScale(colorValue)) {
    return `
      :root {
        ${getColorValueScaleString(colorKey, colorValue)}
      }
    `
  }

  return `
    :root {
      --wui-color-${colorKey}: ${colorValue};
    }
  `
}

const getRootVariableDeclarations = (theme: WuiThemeOptions) => {
  const vars = mapEntries(theme.colors || {}, (key, value) => {
    const unoValue = getColorCSSVars(key, value)
    return [key, unoValue]
  })

  // eslint-disable-next-line prettier/prettier
  return Object.values(vars).join("\n")
}

export const presetWyrd = (options: PresetWyrdOptions = {}): Preset<{}> => {
  const themeOptions = mergeObjects(
    themeDefault,
    options.theme
  ) as WuiThemeOptions

  // generate css vars and pass that down to UnoCSS
  const unoTheme = buildUnoThemeFromSpec(WUI_THEME_SPEC)
  // Extend basic PresetWindi Theme
  const theme = mergeObjects<Theme>(themeWind, unoTheme)

  // We only use specific types of colors for surfaces
  // const surfaceColorKeys = WUI_THEME_SPEC.color.definitions
  //   .filter((cd) => cd.valueType === WuiColorValueType.SCALE_WITH_DARK_VARIANT)
  //   .map((cd) => cd.key)

  // const surfaceShortcuts: ShortcutList = [
  //   [
  //     /^surface-default-(.*)$/,
  //     ([, c]) => `bg-${c}-3 border-${c}-7 text-${c}-11`,
  //   ],
  //   [/^surface-hover-(.*)$/, ([, c]) => `bg-${c}-4 border-${c}-8 text-${c}-12`],
  //   [
  //     /^surface-active-(.*)$/,
  //     ([, c]) => `bg-${c}-5 border-${c}-9 text-${c}-12`,
  //   ],
  // ]

  const colorValueTypeSafeListMapper = {
    [WuiColorValueType.SCALE_WITH_DARK_VARIANT]: (
      key: string,
      steps: WuiColorStepDefinition[]
    ) => {
      return `surface-${key}-default bg-${key}-8`
      return [
        ...Array.from(steps.keys()).map(
          (n) =>
            `bg-${key}-${n} text-${key}-${n} border-${key}-${n} shadow-${key}-${n}`
        ),
      ]
    },
    [WuiColorValueType.SCALE]: (key: string) =>
      `surface-${key}-default bg-${key}-8`,
    [WuiColorValueType.SIMPLE]: (key: string) =>
      `surface-${key}-default bg-${key}-8`,
  }

  const getColorSafelistFromSpec = (colorSpec: WuiColorSpec): string[] => {
    const { definitions, steps } = colorSpec
    return definitions
      .map(({ valueType, key }) =>
        colorValueTypeSafeListMapper[valueType](key, steps)
      )
      .join(' ')
      .split(' ')
  }

  // const cssVarsString = getRootVariableDeclarations(themeOptions)

  // console.log(cssVarsString)

  return {
    name: '@wyrdui/preset-wyrd',
    theme,
    rules,
    shortcuts: [...shortcuts],
    safelist: [
      //   ...surfaceColorKeys.map(
      //     (color) => `surface-${color}-default bg-${color}-8`
      //   ),
      ...getColorSafelistFromSpec(WUI_THEME_SPEC.color),
      // ...WUI_THEME_SPEC.color.definitions
      //   .map(
      //     ({ key }) =>
      //       `bg-${key}-3 bg-${key}-7 bg-${key}-8 surface-default-${key}`
      //   )
      //   .join(' ')
      //   .split(' '),
    ],
    variants: variants(options),
    options,
    preflights: [
      ...preflights,
      {
        getCSS: () => getRootVariableDeclarations(themeOptions),
      },
    ],
    prefix: options.prefix,
  }
}

export default presetWyrd
