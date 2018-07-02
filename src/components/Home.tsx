import { injectGlobal } from 'emotion'
import React from 'react'
import { Container } from 'rebass/emotion'
import Expression from '../components/Expression'
import Flex from '../components/Flex'
import ThemeProvider from '../components/ThemeProvider'
import '../lib/fontAwesome'
import functionTestCases from '../lib/functionTestCases'

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
        {functionTestCases.map((expression, index) => (
          <Flex mr={3} key={index}>
            <Expression expression={expression} />
          </Flex>
        ))}
      </Flex>
    </Container>
  </ThemeProvider>
)

export default Home
