import { ThemeType } from '../../theme'
import { FC } from 'react'

export interface CircularGaugePropsType {
  value: number
  showAsPercentage?: boolean
  max: number
  theme?: ThemeType
  width?: number
}

export interface CircularGaugeComponent extends FC<CircularGaugePropsType> {}
