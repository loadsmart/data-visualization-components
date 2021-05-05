import React, { ChangeEvent, MouseEvent, ReactNode } from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

// @ts-ignore
import {
  Card,
  CardContentProps,
  CardProps,
  CardTitleProps,
  ThemeType
} from '@loadsmart/data-visualization'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    customTheme: { table: { disable: true } },

    titleChildren: {
      control: 'text',
      name: 'Title',
      table: { category: 'Content' }
    },
    contentChildren: {
      control: 'text',
      name: 'Content',
      table: { category: 'Content' }
    },
    contentEditStartButtonContent: {
      control: 'text',
      name: 'Edit Button Content',
      table: { category: 'Content' }
    },
    contentEditEndButtonContent: {
      control: 'text',
      name: 'Edit Save Button Content',
      table: { category: 'Content' }
    },
    contentEditable: {
      control: 'boolean',
      name: 'Editable?',
      table: { category: 'Functionality' }
    },
    contentEditing: {
      control: 'boolean',
      name: 'Currently editing?',
      table: { category: 'Functionality' }
    },
    background: {
      control: 'color',
      name: 'Background (theme.card.background)',
      table: { category: 'Card Theme' }
    },
    padding: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name: 'Padding (theme.card.padding)',
      table: { category: 'Card Theme' }
    },
    shadowColor: {
      control: 'color',
      name: 'Shadow Color (theme.card.shadow)',
      table: { category: 'Card Theme' }
    },
    shadowHOffset: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name: 'Shadow H Offset (theme.card.shadow)',
      table: { category: 'Card Theme' }
    },
    shadowVOffset: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name: 'Shadow V Offset (theme.card.shadow)',
      table: { category: 'Card Theme' }
    },
    shadowBlur: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name: 'Shadow Blur (theme.card.shadow)',
      table: { category: 'Card Theme' }
    },
    shadowSpread: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name: 'Shadow Spread (theme.card.shadow)',
      table: { category: 'Card Theme' }
    },
    borderRadius: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name: 'Border Radius [px] (theme.card.border.radius)',
      table: { category: 'Card Theme' }
    },
    titleSize: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name: 'Title Font Size [px] (theme.card.title.size)',
      table: { category: 'Card Theme' }
    },
    titleWeight: {
      control: {
        type: 'range',
        min: 100,
        max: 900,
        step: 100
      },
      name: 'Title Font Weight [px] (theme.card.title.weight)',
      table: { category: 'Card Theme' }
    },
    titleColor: {
      control: 'color',
      name: 'Title Text Color (theme.card.title.color)',
      table: { category: 'Card Theme' }
    },
    contentSize: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name: 'Title Text Color (theme.card.title.color)',
      table: { category: 'Card Theme' }
    },
    contentWeight: {
      control: {
        type: 'range',
        min: 100,
        max: 900,
        step: 100
      },
      name: 'Content Font Weight [px] (theme.card.content.weight)',
      table: { category: 'Card Theme' }
    },
    contentColor: {
      control: 'color',
      name: 'Content Text Color (theme.card.content.color)',
      table: { category: 'Card Theme' }
    },
    contentMargin: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name: 'Content Margin [px] (theme.card.content.margin)',
      table: { category: 'Card Theme' }
    },
    contentEditButtonPadding: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name:
        'Content Edit Button Padding [px] (theme.card.content.editButton.padding)',
      table: { category: 'Card Theme' }
    },
    contentEditButtonBackground: {
      control: 'color',
      name: 'Edit Button Background (theme.card.content.editButton.background)',
      table: { category: 'Card Theme' }
    },
    contentEditButtonBorderRadius: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name:
        'Edit Button Border Radius [px] (theme.card.content.editButton.border.radius)',
      table: { category: 'Card Theme' }
    },
    contentEditButtonBorderWidth: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name:
        'Edit Button Border Width [px] (theme.card.content.editButton.border.width)',
      table: { category: 'Card Theme' }
    },
    contentEditButtonWidth: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name: 'Edit Button Width [px] (theme.card.content.editButton.width)',
      table: { category: 'Card Theme' }
    },
    contentEditButtonHeight: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name: 'Edit Button Height [px] (theme.card.content.editButton.height)',
      table: { category: 'Card Theme' }
    },
    contentEditButtonRight: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name:
        'Edit Button Distance from Left (theme.card.content.editButton.left)',
      table: { category: 'Card Theme' }
    },
    contentEditButtonTop: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      },
      name: 'Edit Button Distance from Top (theme.card.content.editButton.top)',
      table: { category: 'Card Theme' }
    },
    editStartButtonClickCallback: { action: 'Edit Start Callback' },
    editEndButtonClickCallback: { action: 'Edit End Callback' },
    contentChangeCallback: { action: 'Content Change Callback' }
  }
} as Meta

interface StoryType {
  customTheme: boolean
  contentEditable: boolean
  contentEditing: boolean
  contentEditStartButtonContent: ReactNode
  contentEditEndButtonContent: ReactNode
  contentChildren: ReactNode
  titleChildren: ReactNode
  background: string
  padding: number
  shadowHOffset: number
  shadowVOffset: number
  shadowBlur: number
  shadowSpread: number
  shadowColor: string
  borderRadius: number
  titleSize: number
  titleWeight: number
  titleColor: string
  contentSize: number
  contentWeight: number
  contentColor: string
  contentMargin: number
  contentEditButtonPadding: number
  contentEditButtonBackground: string
  contentEditButtonBorderRadius: number
  contentEditButtonBorderWidth: number
  contentEditButtonWidth: number
  contentEditButtonHeight: number
  contentEditButtonRight: number
  contentEditButtonTop: number
  editStartButtonClickCallback: (event: MouseEvent<HTMLButtonElement>) => null
  editEndButtonClickCallback: (event: MouseEvent<HTMLButtonElement>) => null
  contentChangeCallback: (event: ChangeEvent<HTMLTextAreaElement>) => null
}

const FullTemplate: Story<StoryType> = (args) => {
  const theme: ThemeType = args.customTheme
    ? {
        card: {
          background: args.background,
          padding: `${args.padding}px`,
          shadow: `${args.shadowHOffset}px ${args.shadowVOffset}px ${args.shadowBlur}px ${args.shadowSpread}px ${args.shadowColor}`,
          border: {
            radius: `${args.borderRadius}px`
          },
          title: {
            size: `${args.titleSize}px`,
            weight: args.titleWeight,
            color: args.titleColor
          },
          content: {
            size: `${args.contentSize}px`,
            weight: args.contentWeight,
            color: args.contentColor,
            margin: `${args.contentMargin}px`,
            editButton: {
              padding: `${args.contentEditButtonPadding}px`,
              background: args.contentEditButtonBackground,
              border: {
                radius: `${args.contentEditButtonBorderRadius}px`,
                width: `${args.contentEditButtonBorderWidth}px`
              },
              width: `${args.contentEditButtonWidth}px`,
              height: `${args.contentEditButtonHeight}px`,
              right: `${args.contentEditButtonRight}px`,
              top: `${args.contentEditButtonTop}px`
            }
          }
        }
      }
    : {}

  const cardProps: CardProps = {
    theme
  }

  const cardTitleProps: CardTitleProps = {
    children: args.titleChildren
  }

  const cardContentProps: CardContentProps = {
    editable: args.contentEditable,
    editing: args.contentEditing,
    editStartButtonContent: args.contentEditStartButtonContent,
    editEndButtonContent: args.contentEditEndButtonContent,
    children: args.contentChildren,
    editStartButtonClickCallback: args.editStartButtonClickCallback,
    editEndButtonClickCallback: args.editEndButtonClickCallback,
    contentChangeCallback: args.contentChangeCallback
  }

  return (
    <Card {...cardProps}>
      <Card.Title {...cardTitleProps} />
      <Card.Content {...cardContentProps} />
    </Card>
  )
}

export const DefaultThemeCard = FullTemplate.bind({})
DefaultThemeCard.args = {
  titleChildren:
    'This button has the default style, but you can still configure contents and functionality below.',
  contentChildren:
    "The theme props will be ignored for storybook purposes, in reality you can provide as much theme customization as you want, and whatever you don't provide will fallback to the default theme",
  contentEditEndButtonContent: 'Save',
  customTheme: false
}

export const CustomThemedCard = FullTemplate.bind({})
CustomThemedCard.args = {
  titleChildren: 'This card is fully customizable',
  contentChildren: 'You can change everything in the controls below',
  customTheme: true,
  contentEditable: true,
  contentEditing: false,
  contentEditStartButtonContent: 'EDIT CONTENT',
  contentEditEndButtonContent: 'SAVE CONTENT',
  background: '#09f',
  padding: 30,
  shadowHOffset: 5,
  shadowVOffset: 5,
  shadowBlur: 2,
  shadowSpread: 2,
  shadowColor: '#047',
  borderRadius: 50,
  titleSize: 30,
  titleWeight: 600,
  titleColor: 'white',
  contentSize: 20,
  contentWeight: 400,
  contentColor: 'white',
  contentMargin: 20,
  contentEditButtonPadding: 30,
  contentEditButtonBackground: '#93d',
  contentEditButtonBorderRadius: 15,
  contentEditButtonBorderWidth: 0,
  contentEditButtonWidth: 150,
  contentEditButtonHeight: 50,
  contentEditButtonRight: 20,
  contentEditButtonTop: 20
}
