import React from 'react'
import EmptyState from './EmptyState'
import { render, screen } from '@testing-library/react'
import { ThemeType } from '../../theme'

describe('EmptyState component', () => {
  it('renders with default theme', () => {
    render(<EmptyState />)

    screen.getByText('No data available')
  })

  it('renders with custom theme', () => {
    const customTheme: ThemeType = {
      emptyState: {
        width: '300px',
        height: '300px',
        icon: {
          color: 'red',
          width: 100,
          height: 100
        }
      }
    }

    render(<EmptyState theme={customTheme} />)

    screen.getByText('No data available')
  })

  it('renders with custom text', () => {
    render(<EmptyState text='MUKANJYO Survive Said The Prophet' />)

    screen.getByText('MUKANJYO Survive Said The Prophet')
  })
})
