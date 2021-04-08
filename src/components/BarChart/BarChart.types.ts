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
  theme?: object
  valueFormatter?: (value: string) => string
  width?: number | string
}
