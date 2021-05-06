import styled from 'styled-components'
import getActivatableValue from '../../utils/getActivatableValue'
import { ButtonProps } from './Button.types'

export const StyledButton = styled.button<ButtonProps>`
  padding: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.padding')};

  color: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.text.color')};
  font-weight: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.text.weight')};
  font-size: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.text.size')};
  text-transform: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.text.transform')};

  background: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.background')};
  border-color: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.border.color')};
  border-width: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.border.width')};
  border-radius: ${({ theme, active }) =>
    getActivatableValue(theme, active, 'button.border.radius')};
`
