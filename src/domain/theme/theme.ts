import type { Theme } from '@unocss/preset-mini'
import { list } from 'radash'

import { kebabCase } from '../../utilities'
import {
  WuiColorSpec,
  WuiColorDefinition,
  WuiColorValueType,
  WuiColorValues,
  WUI_COLOR_SPEC,
} from '../color'

export declare type UnoThemeColorValue = string | Record<string, string>

export declare type UnoThemeColorValues = Record<string, UnoThemeColorValue>

export interface WuiThemeSpec {
  color: WuiColorSpec
}

export interface WuiThemeOptions extends Omit<Theme, 'colors'> {
  colors: WuiColorValues
}

export const WUI_THEME_SPEC: WuiThemeSpec = {
  color: WUI_COLOR_SPEC,
}

// Colors we need to pass down to presetWind to get proper class shortcuts
const staticColorValues: UnoThemeColorValues = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
}

const createColorValueToken = (...args: (string | number)[]) =>
  `var(--wui-color-${args.join('-')})`

export const buildThemeColorConfig = (
  colorDefinitions: WuiColorDefinition[]
): UnoThemeColorValues =>
  colorDefinitions.reduce((accumulator, color) => {
    const { valueType, key } = color
    const kebabKey = kebabCase(key)

    if (valueType === WuiColorValueType.SIMPLE) {
      Object.assign(accumulator, {
        [key]: createColorValueToken(kebabKey),
      })
      return accumulator
    }

    const scaleVars = {}
    for (const step of list(0, 12)) {
      scaleVars[step] = createColorValueToken(kebabKey, step)
    }

    Object.assign(accumulator, {
      [key]: scaleVars,
    })
    return accumulator
  }, staticColorValues)

/**
 * Builds theme configuration for UnoCSS from theme specification
 */
export const buildUnoThemeFromSpec = (spec: WuiThemeSpec): Theme => {
  return {
    colors: buildThemeColorConfig(spec.color.definitions),
  }
}

// export const createColorValueToken = (key: string, postfix?: string) =>
//   `hsl(var(--wui-color-${key}${postfix}))`

// export const createValueObjectScale = (definition: WuiColorDefinition) =>
//   Object.keys(WUI_COLOR_SPEC_STEPS).reduce((valueObject, step) => {
//     const stepValue = createColorValueToken(definition.key, `-${step}`)

//     Object.assign(valueObject, { [step]: stepValue })

//     return valueObject
//   }, {})

// export const createValueObjectDualScale = (
//   definition: WuiColorDefinition
// ): Record<string, WuiColorValueScale> => ({
//   [definition.key]: {
//     dark: createValueObjectScale(definition),
//     light: createValueObjectScale(definition),
//   },
// })

// export const getThemeColorValue = (
//   definition: WuiColorDefinition
// ): WuiColorValue => {
//   if (definition.type === COLOR_TYPE.SIMPLE) {
//     return createColorValueToken(definition.key)
//   }

//   return createValueObjectScale(definition)
// }

// export declare type UnoThemeColorValueList = Record<
//   string,
//   string | Record<string, string>
// >

// export const getThemeColors = (): UnoThemeColorValueList =>
//   Object.values(WUI_COLOR_SPEC).reduce((colors, definition) => {
//     Object.assign(colors, getThemeColorValue(definition))
//     return colors
//   }, {} as UnoThemeColorValueList)

// export const generateThemeSpecification = (): WuiTheme => {
//   console.log('****************')
//   console.log('GENERATING THEME SPECIFICATION')
//   const theme = {
//     namespace: 'WYRD.UI.THEME.DEFAULT',
//     description: 'WYRD.UI.THEME.DEFAULT',
//     colors: getThemeColors(),
//   }
//   console.log('GENERATED THEME SPECIFICATION', theme)
//   console.log('****************')
//   return theme
// }

// Aditional color options
// const themeColors = {
// link: colors?.blue,
// primary: 'hsl(var(--a-primary))',
// success: 'hsl(var(--a-success))',
// info: 'hsl(var(--a-info))',
// warning: 'hsl(var(--a-warning))',
// danger: 'hsl(var(--a-danger))',
// a: { border: 'hsla(var(--a-base-color),var(--a-border-opacity))' },
// }

// export const WUI_DEFAULT_THEME = generateThemeSpecification()
