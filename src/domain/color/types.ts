export enum Colors {
  BLACK = 'black',
  WHITE = 'white',
  NEUTRAL = 'neutral',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ACCENT = 'accent',
  INFO = 'info',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
}

export enum WuiColorValueType {
  SIMPLE = 'SIMPLE',
  SCALE = 'SCALE',
  SCALE_WITH_DARK_VARIANT = 'SCALE_WITH_DARK_VARIANT',
}

export type WuiColorValueSimple = string

export type WuiColorValueScale = Record<number | string, string>

export interface WuiColorValueDualScale {
  dark: WuiColorValueScale
  light: WuiColorValueScale
}

export type WuiColorValue =
  | WuiColorValueDualScale
  | WuiColorValueSimple
  | WuiColorValueScale

export declare type WuiColorValues = Record<string, WuiColorValue>

export interface WuiColorDefinition {
  key: string
  valueType: WuiColorValueType
  description: string
  group: string
}

export interface WuiColorGroupDefinition {
  key: string
  name: string
  description: string
}

export interface WuiColorStepDefinition {
  key: number
  title: string
  description: string
}

export interface WuiColorSpec {
  groups: WuiColorGroupDefinition[]
  definitions: WuiColorDefinition[]
  steps: WuiColorStepDefinition[]
}
