import styled from 'styled-components'
import getFromTheme from '../../utils/getFromTheme'
import { CardContentProps, CardProps, CardTitleProps } from './Card.types'

export const StyledCard = styled.div<CardProps>`
  background: ${({ theme }) => getFromTheme(theme, 'card.background')};
  box-shadow: ${({ theme }) => getFromTheme(theme, 'card.shadow')};
  border-radius: ${({ theme }) => getFromTheme(theme, 'card.border.radius')};
  padding: ${({ theme }) => getFromTheme(theme, 'card.padding')};
  font-family: ${({ theme }) => getFromTheme(theme, 'card.fontFamily')};
  position: relative;
`

export const StyledCardTitle = styled.div<CardTitleProps>`
  font-size: ${({ theme }) => getFromTheme(theme, 'card.title.size')};
  font-weight: ${({ theme }) => getFromTheme(theme, 'card.title.weight')};
  color: ${({ theme }) => getFromTheme(theme, 'card.title.color')};
  font-family: ${({ theme }) => getFromTheme(theme, 'card.title.fontFamily')};
`

export const StyledCardContent = styled.div<CardContentProps>`
  font-size: ${({ theme }) => getFromTheme(theme, 'card.content.size')};
  font-weight: ${({ theme }) => getFromTheme(theme, 'card.content.weight')};
  color: ${({ theme }) => getFromTheme(theme, 'card.content.color')};
  font-family: ${({ theme }) => getFromTheme(theme, 'card.content.fontFamily')};
  margin: ${({ theme }) => getFromTheme(theme, 'card.content.margin')};
`

export const StyledCardTextArea = styled.textarea`
  width: 100%;
`

export const StyledEditButton = styled.button`
  padding: ${({ theme }) =>
    getFromTheme(theme, 'card.content.editButton.padding')};
  background: ${({ theme }) =>
    getFromTheme(theme, 'card.content.editButton.background')};
  border-radius: ${({ theme }) =>
    getFromTheme(theme, 'card.content.editButton.border.radius')};
  border-width: ${({ theme }) =>
    getFromTheme(theme, 'card.content.editButton.border.width')};
  width: ${({ theme }) => getFromTheme(theme, 'card.content.editButton.width')};
  height: ${({ theme }) =>
    getFromTheme(theme, 'card.content.editButton.height')};

  position: absolute;
  right: ${({ theme }) => getFromTheme(theme, 'card.content.editButton.right')};
  top: ${({ theme }) => getFromTheme(theme, 'card.content.editButton.top')};

  display: flex;
  align-items: center;
  justify-content: center;
`
