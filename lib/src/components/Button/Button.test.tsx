import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders properly', () => {
    render(<Button>Test Button</Button>)

    screen.getByText('Test Button')
  })

  it('calls the onClick callback', () => {
    const callback = jest.fn()

    render(<Button onClick={callback}>Clickable Button</Button>)

    fireEvent.click(screen.getByText('Clickable Button'))
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
