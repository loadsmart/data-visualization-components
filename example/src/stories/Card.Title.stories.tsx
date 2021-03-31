import React from 'react';

import {Meta, Story} from '@storybook/react/types-6-0';

// @ts-ignore
import { Card, CardProps } from '@loadsmart/data-visualization'

export default {
  title: 'Card/Card.Title',
  component: Card.Title,
  argTypes: {
    children: { control: {
        type: 'text',
        name: 'Content'
      }
    },
  }
} as Meta

const Template: Story<CardProps> = (args) =>
  <Card>
    <Card.Title {...args} />
  </Card>

export const CardWithTitle = Template.bind({});
CardWithTitle.args = {
  children: 'This is the Title'
}
