import { colors } from '@unocss/preset-wind'

export const defaultTheme = {
  fontFamily: {
    body: '"Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    heading:
      '"Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    sans: '"Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  colors: {
    ...colors,
    transparent: 'transparent',
    accent: colors?.sky,
    neutral: colors?.zink,
    success: colors?.lime,
    warning: colors?.amber,
    danger: colors?.rose,
    primary: {
      '50': '#ff5032',
      '100': '#ff4628',
      '200': '#ff3c1e',
      '300': '#f73214',
      '400': '#ed280a',
      '500': '#e31e00',
      '600': '#d91400',
      '700': '#cf0a00',
      '800': '#c50000',
      '900': '#bb0000',
    },
    link: {
      50: '#f2fcfe',
      100: '#e6f8fd',
      200: '#bfeefa',
      300: '#99e4f7',
      400: '#4dd0f1',
      500: '#00bceb',
      600: '#00a9d4',
      700: '#008db0',
      800: '#00718d',
      900: '#005c73',
    },
    info: {
      '50': '#f3f9fc',
      '100': '#e6f4f8',
      '200': '#c1e3ef',
      '300': '#9bd2e5',
      '400': '#50b1d1',
      '500': '#058fbd',
      '600': '#0581aa',
      '700': '#046b8e',
      '800': '#035671',
      '900': '#02465d',
    },
  },
}

export default defaultTheme
