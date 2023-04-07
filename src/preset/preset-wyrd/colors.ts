// based on the colors from Tailwind CSS
// https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
//
// and Windi CSS
// https://github.com/windicss/windicss/blob/main/src/config/colors.ts

// import type { Theme } from '@unocss/preset-wind'

// import { WUI_COLOR_SPEC } from '../../domain'

// const getColorCssVariableString = (color: string, step: number) =>
//   `var(--wui-colors-${color}-1)`

// const getColorCssVariableScale = (color: string) => {
//   const scaleObject = {}
//   for (const step of WUI_COLOR_SPEC.steps) {
//     scaleObject[step.key] = getColorCssVariableString(color, step.key)
//     scaleObject['default'] = scaleObject[4]
//   }
//   return scaleObject
// }

// export const colors: Theme['colors'] = {
//   black: '#000',
//   white: '#fff',
//   primary: getColorCssVariableScale('purple'),
//   secondary: getColorCssVariableScale('pink'),
//   test: getColorCssVariableScale('gray'),
//   neutral: getColorCssVariableScale('gray'),
//   info: getColorCssVariableScale('sky'),
//   success: getColorCssVariableScale('grass'),
//   warning: getColorCssVariableScale('orange'),
//   danger: getColorCssVariableScale('tomato'),
// }

// assign default color, and color shortcuts
// Object.values(colors).forEach((color) => {
//   if (typeof color !== 'string') {
//     color.DEFAULT = color.DEFAULT || color[400]
//     Object.keys(color).forEach((key) => {
//       const short = +key / 100
//       if (short === Math.round(short)) color[short] = color[key]
//     })
//   }
// })
