import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import BarChart from './BarChart'
import { BarChartDataType, BarChartColorsType } from './BarChart.types'
import defaultTheme from '../../theme'

const mockData: BarChartDataType[] = [
  {
    name: 'Foo',
    value: 0
  },
  {
    name: 'Bar',
    value: 30
  },
  {
    name: 'Boo',
    value: 60
  },
  {
    name: 'Far',
    value: 100
  }
]

describe('BarChart Component', () => {
  it('renders without crashing', () => {
    render(<BarChart />)
  })

  it('render with the correct data', async () => {
    render(<BarChart data={mockData} width={400} />)

    await waitFor(() => screen.getByText('Foo'))
    await waitFor(() => screen.getByText('Bar'))
    await waitFor(() => screen.getByText('Boo'))
    await waitFor(() => screen.getByText('Far'))

    await waitFor(() => expect(screen.getAllByText(0).length).toBe(2))
    await waitFor(() => screen.getByText(30))
    await waitFor(() => screen.getByText(60))
    await waitFor(() => expect(screen.getAllByText(100).length).toBe(3))
  })

  it('render with a custom value formatter function', async () => {
    const formatter = jest.fn().mockImplementation((value) => `%%${value}%%`)

    render(<BarChart data={mockData} valueFormatter={formatter} width={400} />)

    // One for each Bar (4 total) plus 5 for the XAxis (has 5 ticks)
    await waitFor(() => expect(formatter).toHaveBeenCalledTimes(9))
  })

  it('colors bars according to the colors "from" rules', async () => {
    const fromColors: BarChartColorsType[] = [
      { from: 50, color: 'blue' },
      { from: 0, color: 'red' }
    ]

    const { container } = render(
      <BarChart colors={fromColors} width={400} data={mockData} />
    )

    // this is just to wait for recharts to finish its thing
    await waitFor(() => screen.getByText('Foo'))

    expect(
      container?.querySelector('path[name=Foo]')?.getAttribute('fill')
    ).toBe('red')
    expect(
      container?.querySelector('path[name=Bar]')?.getAttribute('fill')
    ).toBe('red')
    expect(
      container?.querySelector('path[name=Boo]')?.getAttribute('fill')
    ).toBe('blue')
    expect(
      container?.querySelector('path[name=Far]')?.getAttribute('fill')
    ).toBe('blue')
  })

  it('colors bars according to the colors "to" rules', async () => {
    const fromColors: BarChartColorsType[] = [
      { to: 50, color: 'orange' },
      { to: 100, color: 'pink' }
    ]

    const { container } = render(
      <BarChart colors={fromColors} width={400} data={mockData} />
    )

    // this is just to wait for recharts to finish its thing
    await waitFor(() => screen.getByText('Foo'))

    expect(
      container?.querySelector('path[name=Foo]')?.getAttribute('fill')
    ).toBe('orange')
    expect(
      container?.querySelector('path[name=Bar]')?.getAttribute('fill')
    ).toBe('orange')
    expect(
      container?.querySelector('path[name=Boo]')?.getAttribute('fill')
    ).toBe('pink')
    expect(
      container?.querySelector('path[name=Far]')?.getAttribute('fill')
    ).toBe('pink')
  })

  it('colors bars according to the colors range rules, with fallback to default', async () => {
    const fromColors: BarChartColorsType[] = [
      { from: 0, to: 20, color: 'brown' },
      // { from: 21, to: 40, color: 'should fall back to default' },
      { from: 41, to: 60, color: 'grey' },
      { from: 61, to: 80, color: 'black' },
      { from: 81, to: 100, color: 'yellow' }
    ]

    const { container } = render(
      <BarChart colors={fromColors} width={400} data={mockData} />
    )

    // this is just to wait for recharts to finish its thing
    await waitFor(() => screen.getByText('Foo'))

    expect(
      container?.querySelector('path[name=Foo]')?.getAttribute('fill')
    ).toBe('brown')
    expect(
      container?.querySelector('path[name=Bar]')?.getAttribute('fill')
    ).toBe(defaultTheme.charts!.bar!.fill)
    expect(
      container?.querySelector('path[name=Boo]')?.getAttribute('fill')
    ).toBe('grey')
    expect(
      container?.querySelector('path[name=Far]')?.getAttribute('fill')
    ).toBe('yellow')
  })
})
