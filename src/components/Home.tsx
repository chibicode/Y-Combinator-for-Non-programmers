import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/pro-solid-svg-icons'
import { injectGlobal } from 'emotion'
import React from 'react'
import { Container } from 'rebass/emotion'
import FunctionCall from '../components/FunctionCall'
import ThemeProvider from '../components/ThemeProvider'
library.add(faStar)

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

const Home: React.SFC<{}> = () => (
  <ThemeProvider>
    <Container pt={4}>
      <FunctionCall />
    </Container>
  </ThemeProvider>
)

export default Home
