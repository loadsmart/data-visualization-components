import React from 'react'
import { CircularGauge } from '@loadsmart/data-visualization'
import {Story} from "@storybook/react/types-6-0";
import {ThemeType} from "../../../src";

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
    height: {
      control: 'number'
    },
    barBackground: {
      control: 'color'
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
  height: number
  width: number
  max: number
  value: number
  barBackground: string
  valueWeight: number
  valueSize: number
  valueColor: string
  showAsPercentage: boolean
  barFill: string
}

const Template:Story<ArgsTypes> = ({height, max, value, width, barBackground, valueWeight, valueSize, valueColor, showAsPercentage, barFill}) => {
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
        height,
      }
    }
  }

  return <CircularGauge max={max} value={value} theme={theme} showAsPercentage={showAsPercentage}/>
}

export const DefaultTheme = Template.bind({})
DefaultTheme.args = {
  max: 100,
  value: 50,
  width: 100,
  height: 40
}

export const CustomTheme = Template.bind({})
CustomTheme.args = {
  max: 100,
  value: 50,
  width: 200,
  height: 200,
  barFill: '#ff0000',
  barBackground: '#888',
  valueColor: 'blue',
  valueSize: 80,
  valueWeight: 600,
}

export const PercentageBased = Template.bind({})
PercentageBased.args = {
  max: 19000,
  value: 1000,
  width: 40,
  height: 40,
  showAsPercentage: true
}
