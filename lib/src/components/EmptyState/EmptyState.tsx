import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { EmptyStateComponent } from './EmptyState.types'
import EmptyChartIcon from './EmptyChartIcon'
import getFromTheme from '../../utils/getFromTheme'
import getFromClosestTheme from '../../utils/getFromClosestTheme'
import { ThemeType } from '../../theme'

const EmptyStateWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  width: ${({ theme }) => getFromTheme(theme, 'emptyState.width')};
  height: ${({ theme }) => getFromTheme(theme, 'emptyState.height')};
  padding: 40px;
`

const EmptyStateTextWrapper = styled.div`
  margin-top: 10px;

  color: ${({ theme }) => getFromTheme(theme, 'emptyState.text.color')};
  font-weight: ${({ theme }) => getFromTheme(theme, 'emptyState.text.weight')};
  font-size: ${({ theme }) => getFromTheme(theme, 'emptyState.text.size')};
`

const defaultText = 'No data available'

const EmptyState: EmptyStateComponent = ({ theme, text }) => {
  const contextTheme = useContext(ThemeContext)

  const iconWidth = getFromClosestTheme(
    'emptyState.icon.width',
    theme,
    contextTheme
  )
  const iconHeight = getFromClosestTheme(
    'emptyState.icon.height',
    theme,
    contextTheme
  )
  const iconColor = getFromClosestTheme(
    'emptyState.icon.color',
    theme,
    contextTheme
  )

  const passableTheme: ThemeType = {
    emptyState: {
      width: getFromClosestTheme('emptyState.width', theme, contextTheme),
      height: getFromClosestTheme('emptyState.height', theme, contextTheme),
      text: {
        size: getFromClosestTheme('emptyState.text.size', theme, contextTheme),
        weight: getFromClosestTheme(
          'emptyState.text.weight',
          theme,
          contextTheme
        ),
        color: getFromClosestTheme('emptyState.text.color', theme, contextTheme)
      }
    }
  }

  return (
    <EmptyStateWrapper theme={passableTheme}>
      <EmptyChartIcon width={iconWidth} height={iconHeight} color={iconColor} />
      <EmptyStateTextWrapper theme={passableTheme}>
        {text || defaultText}
      </EmptyStateTextWrapper>
    </EmptyStateWrapper>
  )
}

export default EmptyState
