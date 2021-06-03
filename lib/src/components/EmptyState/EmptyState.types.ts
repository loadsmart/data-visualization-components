import * as CSS from 'csstype'
import { FC } from 'react'
import { ThemeType } from '../../theme'

export interface EmptyChartIconPropsType {
  width?: CSS.Property.Width | number
  height?: CSS.Property.Height | number
  color?: CSS.Property.Fill
}
export interface EmptyChartIconComponent extends FC<EmptyChartIconPropsType> {}

export interface EmptyStatePropsType {
  theme?: ThemeType
  text?: string
}
export interface EmptyStateComponent extends FC<EmptyStatePropsType> {}
