import { Ref } from 'vue'

import { Placement } from '@/domain'

export type TTotalValuePosition = {
  value: number
  min: number
  max: number
}

export type TStepItem = {
  left: number
  active: boolean
}

export type TDataByPreparedStepList = {
  max: number
  min: number
  step: number
  valuePosition: Ref<number>
}

export type TKeyEvents =
  | Placement.Top
  | Placement.Right
  | Placement.Bottom
  | Placement.Left

export type TResultUseValuePosition = [Ref<number>, (newValue: number) => void]
