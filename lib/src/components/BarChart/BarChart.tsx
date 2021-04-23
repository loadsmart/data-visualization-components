import {
  Bar,
  BarChart as RCBarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts'
import React, { FC, useContext } from 'react'
import { BarChartProps, BarChartDataType } from './BarChart.types'

import { ThemeContext } from 'styled-components'
import getFromClosestTheme from '../../utils/getFromClosestTheme'

const BarChart: FC<BarChartProps> = ({
  theme,
  data,
  colors,
  valueFormatter,
  width
}) => {
  const contextTheme = useContext(ThemeContext)

  const fillColor = getFromClosestTheme('charts.bar.fill', theme, contextTheme)
  const barSize = getFromClosestTheme('charts.bar.size', theme, contextTheme)

  const valueColor = getFromClosestTheme(
    'charts.bar.value.color',
    theme,
    contextTheme
  )
  const valueWeight = getFromClosestTheme(
    'charts.bar.value.weight',
    theme,
    contextTheme
  )
  const valueSize = getFromClosestTheme(
    'charts.bar.value.size',
    theme,
    contextTheme
  )

  const nameColor = getFromClosestTheme(
    'charts.bar.name.color',
    theme,
    contextTheme
  )
  const nameWeight = getFromClosestTheme(
    'charts.bar.name.weight',
    theme,
    contextTheme
  )
  const nameSize = getFromClosestTheme(
    'charts.bar.name.size',
    theme,
    contextTheme
  )
  const axisWeight = getFromClosestTheme(
    'charts.bar.axis.weight',
    theme,
    contextTheme
  )
  const axisDistance = getFromClosestTheme(
    'charts.bar.axis.distance',
    theme,
    contextTheme
  )

  const getFillByValue = ({ value }: BarChartDataType) => {
    if (!colors) return fillColor

    for (const color of colors) {
      let isInRange = true

      if (color.from && value < color.from) isInRange = false
      if (color.to && value > color.to) isInRange = false

      if (isInRange) return color.color
    }

    return fillColor
  }

  const renderValueLabel: FC<any> = (props) => {
    const { value, width, y } = props

    return (
      <g>
        <text
          x={width === barSize ? barSize / 2 : width - barSize / 2}
          y={y + barSize / 2 + 1}
          fill={valueColor}
          textAnchor={width === barSize ? 'middle' : 'end'}
          fontWeight={valueWeight}
          dominantBaseline='middle'
          fontSize={valueSize}
        >
          {valueFormatter ? valueFormatter(value) : value}
        </text>
      </g>
    )
  }

  const renderNameLabel: FC<any> = (props) => {
    const { value, x, y } = props

    return (
      <g>
        <text
          x={x}
          y={y - nameSize / 2}
          fill={nameColor}
          textAnchor='start'
          fontWeight={nameWeight}
          dominantBaseline='middle'
          fontSize={nameSize}
        >
          {value}
        </text>
      </g>
    )
  }

  const renderTick = (props: any) => {
    const { y, index, visibleTicksCount } = props

    const newY = y + axisDistance

    let newTextAnchor = 'middle'
    if (index === 0) newTextAnchor = 'start'
    if (index === visibleTicksCount - 1) newTextAnchor = 'end'

    return (
      <text {...props} y={newY} textAnchor={newTextAnchor}>
        {props.tickFormatter(props.payload.value)}
      </text>
    )
  }

  return (
    <ResponsiveContainer
      height={(data?.length || 0) * (barSize + nameSize + 8) + 50}
      width={width || '100%'}
    >
      <RCBarChart data={data} layout='vertical' margin={{ top: 20 }}>
        <Bar
          dataKey='value'
          barSize={barSize}
          minPointSize={barSize}
          radius={barSize}
        >
          <LabelList dataKey='value' content={renderValueLabel} />
          <LabelList
            dataKey='name'
            position='insideLeft'
            fontWeight='bold'
            fontSize={12}
            content={renderNameLabel}
          />
          {data?.map((entry, index) => (
            <Cell key={index} fill={getFillByValue(entry)} />
          ))}
        </Bar>
        <XAxis
          type='number'
          dataKey='value'
          tickCount={5}
          axisLine={false}
          tickLine={false}
          fontSize={valueSize}
          interval={0}
          fontWeight={axisWeight}
          tickFormatter={(tick) => {
            return valueFormatter ? valueFormatter(tick) : tick
          }}
          tick={renderTick}
        />
        <YAxis
          type='category'
          dataKey='name'
          axisLine={false}
          tickLine={false}
          padding={{ bottom: -8 }}
          hide
        />
      </RCBarChart>
    </ResponsiveContainer>
  )
}

export default BarChart
