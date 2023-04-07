import { camelToKebabCase } from '../utilities'
// import { WUI_COLOR_SPEC } from './color-definitions'

const mapColorSafeListItems = (c: string): string[] => {
  return [
    `bg-${c}`,
    `hover:bg-${c}`,
    `border-${c}`,
    `text-${c}`,
    `shadow-${c}`,
    `from-${c}`,
    `to-${c}`,
  ]
}

export const getColorsSafelist = (
  colors: Record<string, string | Record<number, string>>
): string[] => {
  const result = Object.keys(colors).reduce((acc, colorName) => {
    const color = colors[colorName]
    const name = camelToKebabCase(colorName)

    if (typeof color === 'string') {
      const items = mapColorSafeListItems(name)
      acc.push(...items)

      return acc
    }

    const variants = Object.keys(color).reduce((variantAcc, variantName) => {
      variantAcc.push(...mapColorSafeListItems(`${name}-${variantName}`))
      return variantAcc
    }, [] as string[])

    acc.push(...variants)
    return acc
  }, [] as string[])

  return result
}

// const colorSafelist = Object.values(WUI_COLOR_SPEC).reduce((acc, color) => {
//   if (color.type === 'single') {
//     const items = mapColorSafeListItems(color.key)
//     acc.push(...items)
//     return acc
//   }

//   const variants = Object.keys(color).reduce((variantAcc, variantName) => {
//     variantAcc.push(...mapColorSafeListItems(`${name}-${variantName}`))
//     return variantAcc
//   }, [] as string[])

//   acc.push(...variants)
//   return acc
// }, [] as string[])
