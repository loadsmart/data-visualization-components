import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0'

// @ts-ignore
import { Button, ButtonProps, ThemeType } from '@loadsmart/data-visualization'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'clicked',
      table: {
        disable: true
      }
    },
    useThemeProvider: {
      table: {
        disable: true
      }
    },
    children: {
      control: 'text',
      name: 'content'
    },
    theme: {
      control: {
        type: 'object'
      }
    }
  },
  decorators: [
    (Story, args) =>
      args.useThemeProvider ? (
        <ThemeProvider theme={args.theme}>
          <Story />
        </ThemeProvider>
      ) : (
        <Story />
      )
  ]
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
)

const freshThemeOfBelAir: ThemeType = {
  button: {
    active: {
      background: 'mediumpurple',
      text: {
        color: 'lightgreen'
      },
      border: {
        color: 'mediumpurple'
      },
      padding: '10px'
    },
    regular: {
      text: {
        color: 'green'
      },
      background: 'plum',
      padding: '10px'
    }
  }
}

export const DefaultTheme = Template.bind({})
DefaultTheme.args = {
  active: false,
  children: 'Button',
  theme: {}
}

export const ActiveButton = Template.bind({})
ActiveButton.args = {
  active: true,
  children: 'Button',
  theme: {}
}

export const CustomTheme = Template.bind({})
CustomTheme.args = {
  active: true,
  children: 'Button',
  theme: freshThemeOfBelAir
}

export const WithProvider = Template.bind({})
WithProvider.args = {
  active: false,
  children: 'Button',
  theme: freshThemeOfBelAir
}
