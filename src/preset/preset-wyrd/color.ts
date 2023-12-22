import { isObject, mapEntries } from 'radash'

import {
  WuiColorValueType,
  WuiColorValue,
  WuiColorValueScale,
  WuiColorValueDualScale,
  WuiColorSpec,
  WuiColorStepDefinition,
  WuiThemeOptions,
  WUI_COLOR_SPEC,
} from '../../domain'
import { kebabCase } from '../../utilities'

const getSafeListString = (value: string) =>
  `bg-${value} text-${value} border-${value} shadow-${value}`

export const colorValueTypeSafeListMapper = {
  [WuiColorValueType.SCALE_WITH_DARK_VARIANT]: (
    key: string,
    steps: WuiColorStepDefinition[]
  ) => [
    ...Array.from(steps.keys()).map((n) => getSafeListString(`${key}-${n}`)),
  ],
  [WuiColorValueType.SCALE]: (key: string, steps: WuiColorStepDefinition[]) => [
    ...Array.from(steps.keys()).map((n) => getSafeListString(`${key}-${n}`)),
  ],
  [WuiColorValueType.SIMPLE]: (key: string) => getSafeListString(key),
}

export const getColorCSS = (
  theme: WuiThemeOptions,
  lightSelector: string,
  darkSelector: string,
  prefix: string
) => {
  const vars = mapEntries(theme.colors || {}, (key, value) => {
    const unoValue = getColorCSSVars(
      key,
      value,
      lightSelector,
      darkSelector,
      prefix
    )
    return [key, unoValue]
  })

  return Object.values(vars).join('\n')
}

export const getColorSafelistFromSpec = (colorSpec: WuiColorSpec): string[] => {
  const { definitions, steps } = colorSpec
  return definitions
    .map(({ valueType, key }) =>
      colorValueTypeSafeListMapper[valueType](key, steps)
    )
    .join(' ')
    .split(' ')
}

const getColorCSSVars = (
  key: string,
  value: WuiColorValue,
  lightSelector: string,
  darkSelector: string,
  prefix: string
): string => {
  if (isColorValueDualScale(value)) {
    const { light, dark } = value
    return `
      ${lightSelector} {
        ${getColorValueScaleString(key, light, prefix)}
      }
      ${darkSelector} {
        ${getColorValueScaleString(key, dark, prefix)}
      }
    `
  }

  if (isColorValueScale(value)) {
    return `
      ${lightSelector} {
        ${getColorValueScaleString(key, value, prefix)}
      }
    `
  }

  return `
    ${lightSelector} {
      ${prefix}-color-${key}: ${value};
    }
  `
}

const isColorValueDualScale = (
  value: WuiColorValue
): value is WuiColorValueDualScale => {
  if (!isObject(value)) {
    return false
  }
  const keys = Object.keys(value)
  return keys.length === 2 && keys.includes('dark')
}

const isColorValueScale = (
  value: WuiColorValue
): value is WuiColorValueScale => {
  if (!isObject(value)) {
    return false
  }
  const keys = Object.keys(value)
  return keys.length === WUI_COLOR_SPEC.steps.length
}

const getColorValueScaleString = (
  colorKey: string,
  colorScale: WuiColorValueScale,
  prefix: string
) => {
  const mapped = Object.keys(colorScale).map((step: string) => {
    const value = colorScale[step]
    return `${prefix}-color-${kebabCase(colorKey)}-${step}: ${value};`
  })

  return mapped.join('\n')
}
