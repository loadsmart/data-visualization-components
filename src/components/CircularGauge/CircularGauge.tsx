import React, { useCallback, useContext, useMemo } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { CircularGaugeComponent } from './CircularGauge.types'
import { ThemeContext } from 'styled-components'
import getFromClosestTheme from '../../utils/getFromClosestTheme'

const CircularGauge: CircularGaugeComponent = ({
  value,
  max,
  showAsPercentage,
  theme,
  responsive
}) => {
  const contextTheme = useContext(ThemeContext)

  const barFill = getFromClosestTheme(
    'gauges.circular.barFill',
    theme,
    contextTheme
  )
  const barBackground = getFromClosestTheme(
    'gauges.circular.barBackground',
    theme,
    contextTheme
  )
  const barWidth = getFromClosestTheme(
    'gauges.circular.barWidth',
    theme,
    contextTheme
  )

  const valueColor = getFromClosestTheme(
    'gauges.circular.value.color',
    theme,
    contextTheme
  )
  const valueSize = getFromClosestTheme(
    'gauges.circular.value.size',
    theme,
    contextTheme
  )
  const valueWeight = getFromClosestTheme(
    'gauges.circular.value.weight',
    theme,
    contextTheme
  )

  const width = getFromClosestTheme(
    'gauges.circular.width',
    theme,
    contextTheme
  )

  const renderLabel = useCallback(
    (props: any) => {
      if (props.index) return ''
      return (
        <text
          x={props.cx + 1}
          y={props.cy + 1}
          textAnchor='middle'
          alignmentBaseline='middle'
          fontSize={valueSize}
          fill={valueColor}
          fontWeight={valueWeight}
        >
          {`${props.value}${showAsPercentage ? '%' : ''}`}
        </text>
      )
    },
    [showAsPercentage, valueSize, valueColor, valueWeight]
  )

  const data = useMemo(
    () => [
      {
        id: 'value',
        value: showAsPercentage ? Math.round((value / max) * 100) : value
      },
      {
        id: 'background',
        value: showAsPercentage ? 100 - (value / max) * 100 : max - value
      }
    ],
    [showAsPercentage, value, max]
  )

  // For testing purposes we need to pass down a width and height
  //  In the testing env this would render nothing otherwise
  //  It is a problem with ReCharts' responsive container.
  //  For most applications, having it set to 100% will work fine, making it inherit those from its parent node.
  return (
    <ResponsiveContainer
      width={responsive ? '100%' : width}
      height={responsive ? '100%' : width}
    >
      <PieChart>
        <Pie
          innerRadius={responsive ? '80%' : width / 2 - barWidth}
          outerRadius={responsive ? '100%' : width / 2}
          data={data}
          startAngle={90}
          endAngle={-270}
          dataKey='value'
          paddingAngle={0}
          label={renderLabel}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell
              key={`circularGaugeCell_${entry.id}`}
              fill={index ? barBackground : barFill}
              stroke='none'
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default CircularGauge
