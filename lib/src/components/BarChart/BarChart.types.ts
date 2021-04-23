import { ThemeType } from '../../theme'

export interface BarChartDataType {
  name: string
  value: number
}
export interface BarChartColorsType {
  color: string
  from?: number
  to?: number
}
export interface BarChartProps {
  data?: BarChartDataType[]
  colors?: BarChartColorsType[]
  theme?: ThemeType
  valueFormatter?: (value: string) => string
  width?: number | string
}
