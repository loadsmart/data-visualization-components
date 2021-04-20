import React from 'react'
import { CircularGauge, ThemeType } from '@loadsmart/data-visualization'
import {Story} from "@storybook/react/types-6-0";

export default {
  title: 'Circular Gauge',
  component: CircularGauge,
  argTypes: {
    value: {
      control: 'number'
    },
    max: {
      control: 'number'
    },
    width: {
      control: 'number'
    },
    barBackground: {
      control: 'color'
    },
    barWidth: {
      control: 'number'
    },
    valueWeight: {
      control: 'number'
    },
    valueSize: {
      control: 'number'
    },
    valueColor: {
      control: 'color'
    },
    showAsPercentage: {
      control: 'boolean'
    },
    barFill: {
      control: 'color'
    }
  }
}

interface ArgsTypes {
  width: number
  max: number
  value: number
  barBackground: string
  valueWeight: number
  valueSize: number
  valueColor: string
  showAsPercentage: boolean
  barFill: string
  barWidth: number
}

const Template:Story<ArgsTypes> = ({ max, value, width, barBackground, valueWeight, valueSize, valueColor, showAsPercentage, barFill, barWidth}) => {
  const theme:ThemeType = {
    gauges: {
      circular: {
        value: {
          weight: valueWeight,
          size: valueSize,
          color: valueColor
        },
        barBackground,
        barFill,
        width,
        barWidth
      }
    }
  }

  return <CircularGauge max={max} value={value} theme={theme} showAsPercentage={showAsPercentage}/>
}

export const DefaultTheme = Template.bind({})
DefaultTheme.args = {
  max: 100,
  value: 50,
}

export const CustomTheme = Template.bind({})
CustomTheme.args = {
  max: 100,
  value: 50,
  width: 200,
  barFill: '#ff0000',
  barBackground: '#888',
  barWidth: 30,
  valueColor: 'blue',
  valueSize: 80,
  valueWeight: 600,
}

export const PercentageBased = Template.bind({})
PercentageBased.args = {
  max: 19000,
  value: 1000,
  width: 40,
  showAsPercentage: true
}

const ResponsiveTemplate:Story<ArgsTypes> = ({ max, value, showAsPercentage}) => {
  return <div>
    <p>Below is a 100x100 div, the gauge should adapt to it</p>
    <div style={{width: 100, height: 100, background: 'lightpink'}}>
      <CircularGauge max={max} value={value} showAsPercentage={showAsPercentage} responsive />
    </div>
  </div>
}

export const ResponsiveExample = ResponsiveTemplate.bind({})
ResponsiveExample.args = {
  max: 100,
  value: 69,
  showAsPercentage: false
}
