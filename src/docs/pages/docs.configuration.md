---
name: Configuration
meta:
  title: description
---

# Configuration

UI is configured using a TaildindCSS Theme configuration object.

**Required colors**
  - neutral
  - primary
  - secondary
  - accent
  - link
  - info
  - success
  - warning
  - danger

```ts
// your-theme-config.ts
import colors from 'windicss/colors'

export const defaultTheme = {
  colors: {
    ...colors,
    primary: {
      50: '#f9f4f4',
      100: '#f3e9e9',
      200: '#e2c8c8',
      300: '#d0a7a7',
      400: '#ad6666',
      500: '#8a2424',
      600: '#7c2020',
      700: '#681b1b',
      800: '#531616',
      900: '#441212'
    },
    // Define all the required colors in numerated spread format like primary color is defined below.
    // ...
  },
  // note: defining font family is optional
  fontFamily: {
    body: '"Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif,
    heading: '"Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif,
    sans: '"Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif,
    serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
}
```

You should then provide this in tailwind config