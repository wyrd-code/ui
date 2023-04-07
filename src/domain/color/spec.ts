import {
  WuiColorDefinition,
  WuiColorGroupDefinition,
  WuiColorValueType,
  WuiColorSpec,
  WuiColorStepDefinition,
} from './types'

export const steps: WuiColorStepDefinition[] = [
  {
    key: 1,
    title: 'App background',
    description: 'Or a subtle component background',
  },
  {
    key: 2,
    title: 'App background',
    description: 'Or a subtle component background',
  },
  {
    key: 3,
    title: 'Component background',
    description: 'Normal state',
  },
  {
    key: 4,
    title: 'Component background',
    description: 'Hover state',
  },
  {
    key: 5,
    title: 'Component background',
    description: 'pressed/selected/active states',
  },
  {
    key: 6,
    title: 'Borders',
    description:
      'Subtle components which are not interactive (ie sidebar, header, card, alert, separator)',
  },
  {
    key: 7,
    title: 'Borders',
    description: 'Interactive components and focus rings',
  },
  {
    key: 8,
    title: 'Borders',
    description: 'Interactive components in their hover state',
  },
  {
    key: 9,
    title: 'Solid background',
    description: `
    Step 9 has the highest chroma of all steps in the scale.
    In other words, it's the purest step, the step mixed with
    the least amount of white or black. Because 9 is the purest step,
    it has a wide range of applications:
    - Website/App backgrounds
    - Website section backgrounds
    - Header backgrounds
    - Component backgrounds
    - Graphics/Logos
    - Overlays
    - Coloured shadows
    - Accent borders
    `,
  },
  {
    key: 10,
    title: 'Solid background',
    description: 'Hover state',
  },
  {
    key: 11,
    title: 'Text',
    description: 'Low contrast text',
  },
  {
    key: 12,
    title: 'Text',
    description: 'High contrast text',
  },
]

export const definitions: WuiColorDefinition[] = [
  {
    key: 'black',
    valueType: WuiColorValueType.SIMPLE,
    group: 'neutrals',
    description: 'Basic black color',
  },
  {
    key: 'white',
    valueType: WuiColorValueType.SIMPLE,
    group: 'neutrals',
    description: 'Basic white color',
  },
  {
    key: 'overlayBlack',
    valueType: WuiColorValueType.SCALE,
    group: 'neutrals',
    description: 'A scale of black overlay colors',
  },
  {
    key: 'overlayWhite',
    valueType: WuiColorValueType.SCALE,
    group: 'neutrals',
    description: 'A scale of white overlay colors',
  },
  {
    key: 'neutral',
    valueType: WuiColorValueType.SCALE_WITH_DARK_VARIANT,
    group: 'brand',
    description: 'Basic grey scale for backgrounds and surfaces',
  },
  {
    key: 'primary',
    valueType: WuiColorValueType.SCALE_WITH_DARK_VARIANT,
    group: 'brand',
    description: 'Primary brand color',
  },
  {
    key: 'accent',
    valueType: WuiColorValueType.SCALE_WITH_DARK_VARIANT,
    group: 'brand',
    description: 'Accent color for interactive and pronounced UI elements',
  },
  {
    key: 'success',
    valueType: WuiColorValueType.SCALE_WITH_DARK_VARIANT,
    group: 'feedback',
    description: 'Semantic feedback color ',
  },
  {
    key: 'info',
    valueType: WuiColorValueType.SCALE_WITH_DARK_VARIANT,
    group: 'feedback',
    description: 'Semantic feedback color ',
  },
  {
    key: 'warning',
    valueType: WuiColorValueType.SCALE_WITH_DARK_VARIANT,
    group: 'feedback',
    description: 'Semantic feedback color ',
  },
  {
    key: 'danger',
    valueType: WuiColorValueType.SCALE_WITH_DARK_VARIANT,
    group: 'feedback',
    description: 'Semantic feedback color ',
  },
]

export const groups: WuiColorGroupDefinition[] = [
  {
    key: 'neutral',
    name: 'Neutral colors',
    description: 'Neutral (usually grayscale) colors.',
  },
  {
    key: 'brand',
    name: 'Brand colors',
    description: 'The main colors that define the design system appearance',
  },
  {
    key: 'feedback',
    name: 'Feedback colors',
    description: 'Colors we use to communicate meaning to the user',
  },
]

export const WUI_COLOR_SPEC: WuiColorSpec = {
  definitions,
  groups,
  steps,
}
