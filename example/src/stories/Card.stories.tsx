import React from 'react';

import {Meta, Story} from '@storybook/react/types-6-0';

import { Card, CardProps } from '@loadsmart/data-visualization'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    title: {
      control: 'text'
    },
    content: {
      control: 'text'
    }
  }
} as Meta

interface StoryType {
  title?: string
  content?: string
  cardProps?: CardProps
}

const Template: Story<StoryType> = ({content, title}) => <Card>
  <Card.Title>{title}</Card.Title>
  <Card.Content>{content}</Card.Content>
</Card>

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  title: 'Default Card',
  content: 'And this is its content, neat huh?'
}
