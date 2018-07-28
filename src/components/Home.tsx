import { injectGlobal } from 'emotion'
import React from 'react'
import { Container } from 'rebass/emotion'
import ExpressionExecutor from 'src/components/ExpressionExecutor'
import Flex from 'src/components/Flex'
import ThemeProvider from 'src/components/ThemeProvider'
import testCaseExpressions from 'src/lib/testCaseExpressions'

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
        {testCaseExpressions.map((expression, index) => (
          <Flex mb={3} key={index}>
            <ExpressionExecutor expression={expression} />
          </Flex>
        ))}
      </Flex>
    </Container>
  </ThemeProvider>
)

export default Home
