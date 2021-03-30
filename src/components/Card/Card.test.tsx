import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from './Card'
import { Button } from '../../index'

describe('Card Component', () => {
  it('Renders with title and body', () => {
    render(
      <Card>
        <Card.Title>This is the Title</Card.Title>
        <Card.Content>This is the content</Card.Content>
      </Card>
    )

    screen.getByText('This is the Title')
    screen.getByText('This is the content')
  })

  it('Renders with buttons', () => {
    render(
      <Card>
        <Card.Title>This card has buttons</Card.Title>
        <Card.Content>
          <Button>Button A</Button>
          <Button>Second Button</Button>
          <Button>Button III</Button>
        </Card.Content>
      </Card>
    )

    screen.getByText('This card has buttons')
    screen.getByText('Button A')
    screen.getByText('Second Button')
    screen.getByText('Button III')
  })
})
