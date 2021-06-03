import React from 'react'
import { EmptyState } from '@loadsmart/data-visualization'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Empty State',
  component: EmptyState,
  argTypes: {
    text: {
      control: 'text'
    },
    textSize: {
      control: 'number'
    },
    textWeight: {
      control: 'number'
    },
    textColor: {
      control: 'color'
    },
    width: {
      control: 'number'
    },
    height: {
      control: 'number'
    },
    iconWidth: {
      control: 'number'
    },
    iconHeight: {
      control: 'number'
    },
    iconColor: {
      control: 'color'
    }
  }
}

interface ArgTypes {
  text: string
  width: number
  height: number
  iconWidth: number
  iconHeight: number
  iconColor: string
  textSize: number
  textWeight: number
  textColor: string
}

const Template: Story<ArgTypes> = ({
  text,
  width,
  height,
  iconWidth,
  iconHeight,
  iconColor,
  textSize,
  textWeight,
  textColor
}) => {
  const theme = {
    emptyState: {
      width: width ? width + 'px' : undefined,
      height: height ? height + 'px' : undefined,
      icon: {
        width: iconWidth,
        height: iconHeight,
        color: iconColor
      },
      text: {
        size: textSize,
        weight: textWeight,
        color: textColor
      }
    }
  }

  // @ts-ignore
  return <EmptyState theme={theme} text={text} />
}

export const DefaultTheme = Template.bind({})
DefaultTheme.args = {}

export const CustomTheme = Template.bind({})
CustomTheme.args = {
  width: 500,
  height: 400,
  iconWidth: 100,
  iconHeight: 100,
  iconColor: '#ff0000',
  textSize: 20,
  textWeight: 200,
  textColor: '#00ff00'
}
