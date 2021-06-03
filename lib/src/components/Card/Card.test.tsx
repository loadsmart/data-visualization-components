import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
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

  it('Allows editing the content', async () => {
    const changeCallback = jest.fn()
    const editCallback = jest.fn()
    const saveCallback = jest.fn()

    render(
      <Card>
        <Card.Title>This Card is Editable</Card.Title>
        <Card.Content
          editable
          editStartButtonContent='Edit This'
          editStartButtonClickCallback={editCallback}
          editEndButtonContent='Finish Editing'
          editEndButtonClickCallback={saveCallback}
          contentChangeCallback={changeCallback}
        >
          Starting Content
        </Card.Content>
      </Card>
    )

    fireEvent.click(screen.getByText('Edit This'))
    fireEvent.change(screen.getByDisplayValue('Starting Content'), {
      target: { value: 'New Value' }
    })
    fireEvent.click(screen.getByText('Finish Editing'))
    screen.getByText('New Value')

    expect(editCallback).toHaveBeenCalledTimes(1)
    expect(saveCallback).toHaveBeenCalledTimes(1)
    expect(changeCallback).toHaveBeenCalledTimes(1)
  })

  it('works without button editting callbacks', async () => {
    render(
      <Card>
        <Card.Title>This Card is Editable</Card.Title>
        <Card.Content editable editEndButtonContent='Finish Editing'>
          Starting Content
        </Card.Content>
      </Card>
    )

    fireEvent.click(screen.getByText('✏️'))
    fireEvent.change(screen.getByDisplayValue('Starting Content'), {
      target: { value: 'New Value' }
    })
    fireEvent.click(screen.getByText('Finish Editing'))
    screen.getByText('New Value')
  })
})
