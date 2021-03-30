import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '@loadsmart/data-visualization'
import {ThemeProvider} from "styled-components";

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      control: 'text'
    },
    theme: {
      control: {
        type: 'object',
      }
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>{args.children}</Button>;
const TemplateProvider: Story<ButtonProps> = ({ theme, ...args}) => <ThemeProvider theme={theme}><Button {...args}>{args.children}</Button></ThemeProvider>

const freshThemeOfBelAir = {
  button: {
    active: {
      background: 'mediumpurple',
      text: {
        color: 'lightgreen'
      },
      border: {
        color: 'mediumpurple'
      },
      padding: '10px',
    },
    regular: {
      text: {
        color: 'green'
      },
      background: 'plum',
      padding: '10px',
    }
  }
}

export const DefaultTheme = Template.bind({});
DefaultTheme.args = {
  active: false,
  children: 'Button',
  theme: {}
};

export const ActiveButton = Template.bind({});
ActiveButton.args = {
  active: true,
  children: 'Button',
  theme: {}
};

export const CustomTheme = Template.bind({});
CustomTheme.args = {
  active: true,
  children: 'Button',
  theme: freshThemeOfBelAir
}

export const WithProvider = TemplateProvider.bind({});
WithProvider.args = {
  active: false,
  children: 'Button',
  theme: freshThemeOfBelAir
}
