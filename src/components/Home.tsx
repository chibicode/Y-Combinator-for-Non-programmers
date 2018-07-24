import { injectGlobal } from 'emotion'
import React from 'react'
import { Container } from 'rebass/emotion'
import BorderWrapper from 'src/components/BorderWrapper'
import Expression from 'src/components/Expression'
import Flex from 'src/components/Flex'
import ThemeProvider from 'src/components/ThemeProvider'
import functionTestCases from 'src/lib/functionTestCases'

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
      <Flex flexDirection="column" alignItems="flex-start">
        {functionTestCases.map((expression, index) => (
          <Flex mb={3} key={index}>
            <BorderWrapper>
              <Expression expression={expression} />
            </BorderWrapper>
          </Flex>
        ))}
      </Flex>
    </Container>
  </ThemeProvider>
)

export default Home
