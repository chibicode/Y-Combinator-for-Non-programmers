import { injectGlobal } from 'emotion'
import React from 'react'
import { Container } from 'rebass/emotion'
import Flex from '../components/Flex'
import FunctionCall from '../components/FunctionCall'
import ThemeProvider from '../components/ThemeProvider'
import '../lib/fontAwesome'

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
    <Container pt={4} color="black">
      <Flex>
        <Flex mr={2}>
          <FunctionCall />
        </Flex>
      </Flex>
    </Container>
  </ThemeProvider>
)

export default Home
