import React from 'react'

import { Button } from '@loadsmart/data-visualization'
import {ThemeProvider} from "styled-components";

const buttonTheme = {
  button: {
    regular: {
      background: 'red'
    },
    active: {
      background: 'blue'
    }
  }
}

const App = () => {
  return <>
    <h1>Button</h1>
    <h2>Regular</h2>
      <p>
        <Button>Default Theme</Button>
      </p>
    <p>
      <Button theme={buttonTheme}>Theme Prop</Button>
    </p>
    <p>
      <ThemeProvider theme={buttonTheme}> <Button>Theme Provider Wrapped</Button> </ThemeProvider>
    </p>

    <h2>Active</h2>
    <p>
      <Button active>Default</Button>
    </p>
    <p>
      <Button active theme={buttonTheme}>Custom Theme</Button>
    </p>
    <p>
      <ThemeProvider theme={buttonTheme}> <Button active>Theme Provider Wrapped</Button> </ThemeProvider>
    </p>
    </>
}

export default App
