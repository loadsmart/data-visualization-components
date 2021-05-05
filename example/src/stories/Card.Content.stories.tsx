import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

// @ts-ignore
import { CardContentProps, Card } from '@loadsmart/data-visualization'

export default {
  title: 'Card/Card.Content',
  component: Card.Content,
  argTypes: {
    children: { control: { type: 'text', name: 'Content' } },
    editable: { control: 'boolean' },
    editing: { control: 'boolean' },
    editStartButtonClickCallback: {
      action: 'Edit Button Clicked',
      table: { disabled: true }
    },
    editEndButtonClickCallback: {
      action: 'Edit Button Clicked',
      table: { disabled: true }
    },
    editStartButtonContent: { control: 'text' },
    editEndButtonContent: { control: 'text' },
    contentChangeCallback: {
      action: 'Content Changed',
      table: { disabled: true }
    }
  }
} as Meta

const Template: Story<CardContentProps> = (args) => (
  <Card>
    <Card.Content {...args} />
  </Card>
)

export const CardWithContent = Template.bind({})
CardWithContent.args = {
  children: 'This is the content',
  editable: false
}

export const CardWithEditableContent = Template.bind({})
CardWithEditableContent.args = {
  children: 'You can edit this',
  editable: true,
  editing: true,
  editEndButtonContent: 'Finish Editing'
}
