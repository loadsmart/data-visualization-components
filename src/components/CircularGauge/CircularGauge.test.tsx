import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import CircularGauge from './CircularGauge'
import { ThemeType } from '../../theme'

const theme: ThemeType = {
  gauges: {
    circular: {
      width: 100,
      height: 100
    }
  }
}

describe('Circular Gauge Component', () => {
  it('renders without crashing', () => {
    render(<CircularGauge value={10} max={100} theme={{}} />)
  })

  it('renders with correct value', async () => {
    render(<CircularGauge value={10} max={100} theme={theme} />)

    await waitFor(() => screen.getByText('10'), { timeout: 10000 })
  })

  it('shows as percentage', async () => {
    render(<CircularGauge value={10} max={50} theme={theme} showAsPercentage />)

    await waitFor(() => screen.getByText('20%'), { timeout: 10000 })
  })
})
