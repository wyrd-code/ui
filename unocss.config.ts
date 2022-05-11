import {
  defineConfig,
  presetWind,
  presetTypography,
  presetIcons,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export function createConfig({ strict = true, dev = true } = {}): any {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    theme: {
      fontFamily: {
        // sans: '\'Inter\', sans-serif',
        // mono: '\'Fira Code\', monospace',
      },
      colors: {
        // indigo
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81"
        },
        // sky
        accent: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e"
        },
        // zinc
        neutral: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b"
        },
        // lime
        success: {
          50: "#f7fee7",
          100: "#ecfccb",
          200: "#d9f99d",
          300: "#bef264",
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
          700: "#4d7c0f",
          800: "#3f6212",
          900: "#365314"
        },
        // amber
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f"
        },
        // rose
        danger: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337"
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
          900: '#005c73'
        },
        info: {
          50: '#f3f9fc', 
          100: '#e6f4f8', 
          200: '#c1e3ef', 
          300: '#9bd2e5', 
          400: '#50b1d1', 
          500: '#058fbd', 
          600: '#0581aa', 
          700: '#046b8e', 
          800: '#035671', 
          900: '#02465d'
        },
      },
    },
    presets: [
      presetWind(),
      presetTypography({}),
      presetIcons({
        prefix: 'icon-',
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
          'color': 'inherit',
        },
      }),
    ],
    transformers: [
      transformerVariantGroup(),
      transformerDirectives(),
      transformerCompileClass(),
    ],
  })
}

export default createConfig()


// textColors: {
  // accent
  // neutral
  // success
  // warning
  // danger
  // primary
  // link
  // info
// },
