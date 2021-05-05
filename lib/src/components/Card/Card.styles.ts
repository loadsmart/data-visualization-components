import styled from 'styled-components'
import getFromTheme from '../../utils/getFromTheme'
import { CardContentProps, CardProps, CardTitleProps } from './Card.types'

export const StyledCard = styled.div<CardProps>`
  position: relative;

  padding: ${({ theme }) => getFromTheme(theme, 'card.padding')};

  font-family: ${({ theme }) => getFromTheme(theme, 'card.fontFamily')};

  background: ${({ theme }) => getFromTheme(theme, 'card.background')};
  border-radius: ${({ theme }) => getFromTheme(theme, 'card.border.radius')};
  box-shadow: ${({ theme }) => getFromTheme(theme, 'card.shadow')};
`

export const StyledCardTitle = styled.div<CardTitleProps>`
  color: ${({ theme }) => getFromTheme(theme, 'card.title.color')};
  font-weight: ${({ theme }) => getFromTheme(theme, 'card.title.weight')};
  font-size: ${({ theme }) => getFromTheme(theme, 'card.title.size')};
  font-family: ${({ theme }) => getFromTheme(theme, 'card.title.fontFamily')};
`

export const StyledCardContent = styled.div<CardContentProps>`
  margin: ${({ theme }) => getFromTheme(theme, 'card.content.margin')};

  color: ${({ theme }) => getFromTheme(theme, 'card.content.color')};
  font-weight: ${({ theme }) => getFromTheme(theme, 'card.content.weight')};
  font-size: ${({ theme }) => getFromTheme(theme, 'card.content.size')};
  font-family: ${({ theme }) => getFromTheme(theme, 'card.content.fontFamily')};
`

export const StyledCardTextArea = styled.textarea`
  width: 100%;
`

export const StyledEditButton = styled.button`

  position: absolute;
  top: ${({ theme }) => getFromTheme(theme, 'card.content.editButton.top')};
  right: ${({ theme }) => getFromTheme(theme, 'card.content.editButton.right')};

  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => getFromTheme(theme, 'card.content.editButton.width')};
  height: ${({ theme }) =>
    getFromTheme(theme, 'card.content.editButton.height')};
  padding: ${({ theme }) =>
    getFromTheme(theme, 'card.content.editButton.padding')};

  background: ${({ theme }) =>
    getFromTheme(theme, 'card.content.editButton.background')};
  border-width: ${({ theme }) =>
    getFromTheme(theme, 'card.content.editButton.border.width')};
  border-radius: ${({ theme }) =>
    getFromTheme(theme, 'card.content.editButton.border.radius')};
`
