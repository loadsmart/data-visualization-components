import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'

import { BarChart } from '@loadsmart/data-visualization'

const App = () => (
  <div>
    <BarChart data={[]} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
