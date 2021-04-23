import React from 'react'
import { BarChart, ThemeType } from '@loadsmart/data-visualization'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Bar Chart',
  component: BarChart,
  argTypes: {
    fill: {
      control: 'color'
    },
    size: {
      control: 'range'
    },
    valueColor: {
      control: 'color'
    },
    valueWeight: {
      control: 'number'
    },
    valueSize: {
      control: 'range'
    },
    nameColor: {
      control: 'color'
    },
    nameWeight: {
      control: 'number'
    },
    nameSize: {
      control: 'range'
    },
    valueFormatter: {
      table: {
        disable: true
      }
    },
    colors: {
      control: 'object',
      description: 'You can omit either from and to properties'
    },
    axisWeight: {
      control: 'number'
    },
    axisDistance: {
      control: 'range'
    }
  }
}

const mockData = [
  {
    name: 'Item A',
    value: 100
  },
  {
    name: 'Item B',
    value: 65
  },
  {
    name: 'Item C',
    value: 33
  },
  {
    name: 'Item D',
    value: 0
  }
]

const Template: Story = (args) => {
  const theme: ThemeType = {
    charts: {
      bar: {
        fill: args.fill,
        size: args.size,
        value: {
          color: args.valueColor,
          size: args.valueSize,
          weight: args.valueWeight
        },
        name: {
          color: args.nameColor,
          size: args.nameSize,
          weight: args.nameWeight
        },
        axis: {
          weight: args.axisWeight,
          distance: args.axisDistance
        }
      }
    }
  }
  return (
    <BarChart
      data={mockData}
      colors={args.colors}
      valueFormatter={args.valueFormatter}
      theme={theme}
    />
  )
}

export const DefaultTheme = Template.bind({})
DefaultTheme.args = {}

export const CustomValueFormatter = Template.bind({})
CustomValueFormatter.args = {
  valueFormatter: (value: string) => `**--${value}--**`
}

export const FullyCustomizedTheme = Template.bind({})
FullyCustomizedTheme.args = {
  fill: '#229955',
  size: 48,
  valueColor: '#995522',
  valueWeight: '300',
  valueSize: 24,
  nameColor: '#552299',
  nameWeight: '300',
  nameSize: 28,
  axisWeight: 900
}

export const ColorsBasedOnValue = Template.bind({})
ColorsBasedOnValue.args = {
  colors: [
    {
      from: 0,
      to: 33,
      color: 'red'
    },
    {
      from: 34,
      to: 66,
      color: 'green'
    },
    {
      from: 67,
      color: 'blue'
    }
  ]
}

export const MoreColorConfigs = Template.bind({})
MoreColorConfigs.args = {
  colors: [
    {
      to: 50,
      color: 'blue'
    },
    {
      from: 0,
      color: 'orange'
    }
  ]
}
