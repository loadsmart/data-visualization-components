# @loadsmart/data-visualization

[![NPM](https://img.shields.io/npm/v/@loadsmart/data-visualization.svg)](https://www.npmjs.com/package/@loadsmart/data-visualization) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

This library is meant to be used along a few dependencies, which are listed as peer dependencies, so you will need to provide those in your project (and you most likely already have most of them)

- `"@types/recharts": "^1.8.19"`,
- `"lodash.get": "^4.4.2"`,
- `"react": "^16.0.0"`,
- `"recharts": "^2.0.9"`,
- `"styled-components": "^5.2.1"`

If the lib isn't working properly, check if you have appropriate versions of all of these installed!

With NPM

```bash
npm install --save @loadsmart/data-visualization
```

or Yarn

```bash
yarn add @loadsmart/data-visualization
```

## Usage

```tsx
import React, { Component } from 'react'

import { Card } from '@loadsmart/data-visualization'

class Example extends Component {
  render() {
    return <Card />
  }
}
```

## Contributing

Guide at [CONTRIBUTING.md](https://github.com/loadsmart/data-visualization-components/blob/main/CONTRIBUTING.md)

## Meta

- **State:** development
- **Demo:** <https://loadsmart-data-insights-ui.netlify.app/>
- **Point People:** [@lipe-dev](https://github.com/lipe-dev)

## License

[MIT](./LICENSE)
