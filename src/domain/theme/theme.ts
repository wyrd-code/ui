import type { Theme } from '@unocss/preset-mini'

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
  name: string
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
    for (const step of Array(12).keys()) {
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
export const buildThemeFromSpec = (spec: WuiThemeSpec): Theme => {
  return {
    colors: buildThemeColorConfig(spec.color.definitions),
  }
}
