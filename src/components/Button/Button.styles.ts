import styled from 'styled-components'
import getActivatableValue from '../../utils/getActivatableValue'
import { ButtonProps } from './Button.types'

export const StyledButton = styled.button<ButtonProps>`
  background: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.background')};
  border-color: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.border.color')};
  border-radius: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.border.radius')};
  border-width: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.border.width')};
  color: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.text.color')};
  font-size: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.text.size')};
  font-weight: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.text.weight')};
  text-transform: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.text.transform')};
  padding: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.padding')};
`
