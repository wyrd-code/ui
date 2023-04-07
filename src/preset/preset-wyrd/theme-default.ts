import { WuiThemeOptions } from '../../domain'

// const getColorCssVariableString = (color: string, step: number) =>
//   `var(--wui-colors-${color}-1)`

// const getColorCssVariableScale = (color: string) => {
//   const scaleObject = {}
//   for (const step of WUI_COLOR_SPEC.steps) {
//     scaleObject[step.key] = getColorCssVariableString(color, step.key)
//   }
//   return scaleObject
// }

export const themeDefault: WuiThemeOptions = {
  // fontFamily: {
  //   sans: ['Graphik', 'sans-serif'],
  //   serif: ['Merriweather', 'serif'],
  // },
  // fontSize: {
  //   xs: ['0.75rem', { lineHeight: '1rem' }],
  //   sm: ['0.875rem', { lineHeight: '1.25rem' }],
  //   base: ['1rem', { lineHeight: '1.5rem' }],
  //   lg: ['1.125rem', { lineHeight: '1.75rem' }],
  //   xl: ['1.25rem', { lineHeight: '1.75rem' }],
  //   '2xl': ['1.5rem', { lineHeight: '2rem' }],
  //   '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  //   '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  //   '5xl': ['3rem', { lineHeight: '1' }],
  //   '6xl': ['3.75rem', { lineHeight: '1' }],
  //   '7xl': ['4.5rem', { lineHeight: '1' }],
  //   '8xl': ['6rem', { lineHeight: '1' }],
  //   '9xl': ['8rem', { lineHeight: '1' }],
  // },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },
  // spacing: {
  //   128: '32rem',
  //   144: '36rem',
  // },
  // borderRadius: {
  //   '4xl': '2rem',
  // },
  colors: {
    black: '#070707',
    white: '#f7f7f7',
    overlayWhite: {
      1: 'hsla(0, 0%, 100%, 0)',
      2: 'hsla(0, 0%, 100%, 0.013)',
      3: 'hsla(0, 0%, 100%, 0.034)',
      4: 'hsla(0, 0%, 100%, 0.056)',
      5: 'hsla(0, 0%, 100%, 0.086)',
      6: 'hsla(0, 0%, 100%, 0.124)',
      7: 'hsla(0, 0%, 100%, 0.176)',
      8: 'hsla(0, 0%, 100%, 0.249)',
      9: 'hsla(0, 0%, 100%, 0.386)',
      10: 'hsla(0, 0%, 100%, 0.446)',
      11: 'hsla(0, 0%, 100%, 0.592)',
      12: 'hsla(0, 0%, 100%, 0.923)',
    },
    overlayBlack: {
      1: 'hsla(0, 0%, 0%, 0.012)',
      2: 'hsla(0, 0%, 0%, 0.027)',
      3: 'hsla(0, 0%, 0%, 0.047)',
      4: 'hsla(0, 0%, 0%, 0.071)',
      5: 'hsla(0, 0%, 0%, 0.090)',
      6: 'hsla(0, 0%, 0%, 0.114)',
      7: 'hsla(0, 0%, 0%, 0.141)',
      8: 'hsla(0, 0%, 0%, 0.220)',
      9: 'hsla(0, 0%, 0%, 0.439)',
      10: 'hsla(0, 0%, 0%, 0.478)',
      11: 'hsla(0, 0%, 0%, 0.565)',
      12: 'hsla(0, 0%, 0%, 0.910)',
    },
    neutral: {
      // radix sage
      light: {
        1: 'hsl(155, 30.0%, 98.8%)',
        2: 'hsl(150, 16.7%, 97.6%)',
        3: 'hsl(151, 10.6%, 95.2%)',
        4: 'hsl(151, 8.8%, 93.0%)',
        5: 'hsl(151, 7.8%, 90.8%)',
        6: 'hsl(152, 7.2%, 88.4%)',
        7: 'hsl(153, 6.7%, 85.3%)',
        8: 'hsl(154, 6.1%, 77.5%)',
        9: 'hsl(155, 3.5%, 55.5%)',
        10: 'hsl(154, 2.8%, 51.7%)',
        11: 'hsl(155, 3.0%, 43.0%)',
        12: 'hsl(155, 24.0%, 9.0%)',
      },
      dark: {
        1: 'hsl(155, 7.0%, 8.4%)',
        2: 'hsl(150, 7.4%, 10.6%)',
        3: 'hsl(150, 6.7%, 13.1%)',
        4: 'hsl(150, 6.4%, 15.3%)',
        5: 'hsl(150, 6.1%, 17.4%)',
        6: 'hsl(150, 5.8%, 19.9%)',
        7: 'hsl(150, 5.5%, 23.6%)',
        8: 'hsl(150, 5.1%, 30.6%)',
        9: 'hsl(155, 6.0%, 42.5%)',
        10: 'hsl(153, 4.8%, 48.2%)',
        11: 'hsl(155, 5.0%, 61.8%)',
        12: 'hsl(155, 6.0%, 93.0%)',
      },
    },
    accent: {
      // radix red
      light: {
        1: 'hsl(359, 100%, 99.4%)',
        2: 'hsl(359, 100%, 98.6%)',
        3: 'hsl(360, 100%, 96.8%)',
        4: 'hsl(360, 97.9%, 94.8%)',
        5: 'hsl(360, 90.2%, 91.9%)',
        6: 'hsl(360, 81.7%, 87.8%)',
        7: 'hsl(359, 74.2%, 81.7%)',
        8: 'hsl(359, 69.5%, 74.3%)',
        9: 'hsl(358, 75%, 59%)',
        10: 'hsl(358, 69.4%, 55.2%)',
        11: 'hsl(358, 65%, 48.7%)',
        12: 'hsl(354, 50%, 14.6%)',
      },
      dark: {
        1: 'hsl(353, 23%, 9.8%))',
        2: 'hsl(357, 34.4%, 12%))',
        3: 'hsl(356, 43.4%, 16.4%))',
        4: 'hsl(356, 47.6%, 19.2%))',
        5: 'hsl(356, 51.1%, 21.9%))',
        6: 'hsl(356, 55.2%, 25.9%))',
        7: 'hsl(357, 60.2%, 31.8%))',
        8: 'hsl(358, 65%, 40.4%))',
        9: 'hsl(358, 75%, 59%))',
        10: 'hsl(358, 85.3%, 64%))',
        11: 'hsl(358, 100%, 69.5%))',
        12: 'hsl(351, 89%, 96%))',
      },
    },
    primary: {
      // radix violet
      light: {
        1: 'hsl(116, 50.0%, 98.9%)',
        2: 'hsl(120, 60.0%, 97.1%)',
        3: 'hsl(120, 53.6%, 94.8%)',
        4: 'hsl(121, 47.5%, 91.4%)',
        5: 'hsl(122, 42.6%, 86.5%)',
        6: 'hsl(124, 39.0%, 79.7%)',
        7: 'hsl(126, 37.1%, 70.2%)',
        8: 'hsl(131, 38.1%, 56.3%)',
        9: 'hsl(131, 41.0%, 46.5%)',
        10: 'hsl(132, 43.1%, 42.2%)',
        11: 'hsl(133, 50.0%, 32.5%)',
        12: 'hsl(130, 30.0%, 14.9%)',
      },
      dark: {
        1: 'hsl(250, 20.0%, 10.2%)',
        2: 'hsl(255, 30.3%, 12.9%)',
        3: 'hsl(253, 37.0%, 18.4%)',
        4: 'hsl(252, 40.1%, 22.5%)',
        5: 'hsl(252, 42.2%, 26.2%)',
        6: 'hsl(251, 44.3%, 31.1%)',
        7: 'hsl(250, 46.8%, 38.9%)',
        8: 'hsl(250, 51.8%, 51.2%)',
        9: 'hsl(252, 56.0%, 57.5%)',
        10: 'hsl(251, 63.2%, 63.2%)',
        11: 'hsl(250, 95.0%, 76.8%)',
        12: 'hsl(252, 87.0%, 96.4%)',
      },
    },
    info: {
      // radix cyan
      light: {
        1: 'hsl(185, 60.0%, 98.7%)',
        2: 'hsl(185, 73.3%, 97.1%)',
        3: 'hsl(186, 70.2%, 94.4%)',
        4: 'hsl(186, 63.8%, 90.6%)',
        5: 'hsl(187, 58.3%, 85.4%)',
        6: 'hsl(188, 54.6%, 78.4%)',
        7: 'hsl(189, 53.7%, 68.7%)',
        8: 'hsl(189, 60.3%, 52.5%)',
        9: 'hsl(190, 95.0%, 39.0%)',
        10: 'hsl(191, 91.2%, 36.8%)',
        11: 'hsl(192, 85.0%, 31.0%)',
        12: 'hsl(192, 88.0%, 12.5%)',
      },
      dark: {
        1: 'hsl(192, 60.0%, 7.2%)',
        2: 'hsl(192, 71.4%, 8.2%)',
        3: 'hsl(192, 75.9%, 10.8%)',
        4: 'hsl(192, 79.3%, 12.8%)',
        5: 'hsl(192, 82.5%, 14.6%)',
        6: 'hsl(192, 86.6%, 16.9%)',
        7: 'hsl(192, 92.6%, 20.1%)',
        8: 'hsl(192, 100%, 24.5%)',
        9: 'hsl(190, 95.0%, 39.0%)',
        10: 'hsl(188, 100%, 40.0%)',
        11: 'hsl(186, 100%, 42.2%)',
        12: 'hsl(185, 73.0%, 93.2%)',
      },
    },
    success: {
      // radix grass
      light: {
        1: 'hsl(116, 50.0%, 98.9%)',
        2: 'hsl(120, 60.0%, 97.1%)',
        3: 'hsl(120, 53.6%, 94.8%)',
        4: 'hsl(121, 47.5%, 91.4%)',
        5: 'hsl(122, 42.6%, 86.5%)',
        6: 'hsl(124, 39.0%, 79.7%)',
        7: 'hsl(126, 37.1%, 70.2%)',
        8: 'hsl(131, 38.1%, 56.3%)',
        9: 'hsl(131, 41.0%, 46.5%)',
        10: 'hsl(132, 43.1%, 42.2%)',
        11: 'hsl(133, 50.0%, 32.5%)',
        12: 'hsl(130, 30.0%, 14.9%)',
      },
      dark: {
        1: 'hsl(146, 30.0%, 7.4%)',
        2: 'hsl(136, 33.3%, 8.8%)',
        3: 'hsl(137, 36.0%, 11.4%)',
        4: 'hsl(137, 37.6%, 13.7%)',
        5: 'hsl(136, 38.7%, 16.0%)',
        6: 'hsl(135, 39.6%, 19.1%)',
        7: 'hsl(134, 40.3%, 23.8%)',
        8: 'hsl(131, 40.1%, 30.8%)',
        9: 'hsl(131, 41.0%, 46.5%)',
        10: 'hsl(131, 39.0%, 52.1%)',
        11: 'hsl(131, 43.0%, 57.2%)',
        12: 'hsl(137, 72.0%, 94.0%)',
      },
    },
    warning: {
      // amber
      light: {
        1: 'hsl(39, 70.0%, 99.0%)',
        2: 'hsl(40, 100%, 96.5%)',
        3: 'hsl(44, 100%, 91.7%)',
        4: 'hsl(43, 100%, 86.8%)',
        5: 'hsl(42, 100%, 81.8%)',
        6: 'hsl(38, 99.7%, 76.3%)',
        7: 'hsl(36, 86.1%, 67.1%)',
        8: 'hsl(35, 85.2%, 55.1%)',
        9: 'hsl(39, 100%, 57.0%)',
        10: 'hsl(35, 100%, 55.5%)',
        11: 'hsl(30, 100%, 34.0%)',
        12: 'hsl(20, 80.0%, 17.0%)',
      },
      dark: {
        1: 'hsl(36, 100%, 6.1%)',
        2: 'hsl(35, 100%, 7.6%)',
        3: 'hsl(32, 100%, 10.2%)',
        4: 'hsl(32, 100%, 12.4%)',
        5: 'hsl(33, 100%, 14.6%)',
        6: 'hsl(35, 100%, 17.1%)',
        7: 'hsl(35, 91.0%, 21.6%)',
        8: 'hsl(36, 100%, 25.5%)',
        9: 'hsl(39, 100%, 57.0%)',
        10: 'hsl(43, 100%, 64.0%)',
        11: 'hsl(39, 90.0%, 49.8%)',
        12: 'hsl(39, 97.0%, 93.2%)',
      },
    },
    danger: {
      // tomato
      light: {
        1: 'hsl(10, 100%, 99.4%)',
        2: 'hsl(8, 100%, 98.4%)',
        3: 'hsl(8, 100%, 96.6%)',
        4: 'hsl(8, 100%, 94.3%)',
        5: 'hsl(8, 92.8%, 91.0%)',
        6: 'hsl(9, 84.7%, 86.3%)',
        7: 'hsl(10, 77.3%, 79.5%)',
        8: 'hsl(10, 71.6%, 71.0%)',
        9: 'hsl(10, 78.0%, 54.0%)',
        10: 'hsl(10, 71.5%, 50.0%)',
        11: 'hsl(10, 82.0%, 43.5%)',
        12: 'hsl(10, 50.0%, 13.5%)',
      },
      dark: {
        1: 'hsl(10, 23.0%, 9.4%)',
        2: 'hsl(9, 44.8%, 11.4%)',
        3: 'hsl(8, 52.0%, 15.3%)',
        4: 'hsl(7, 56.3%, 18.0%)',
        5: 'hsl(7, 60.1%, 20.6%)',
        6: 'hsl(8, 64.8%, 24.0%)',
        7: 'hsl(8, 71.2%, 29.1%)',
        8: 'hsl(10, 80.2%, 35.7%)',
        9: 'hsl(10, 78.0%, 54.0%)',
        10: 'hsl(10, 81.7%, 59.0%)',
        11: 'hsl(10, 85.0%, 62.8%)',
        12: 'hsl(10, 89.0%, 96.0%)',
      },
    },
  },
}