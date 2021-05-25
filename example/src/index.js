import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'

import { BarChart } from '@loadsmart/data-visualization'

const App = () => (
  <div>
    <BarChart
      data={[
        { name: 'Foo', value: 50 },
        { name: 'Bar', value: 100 }
      ]}
    />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
