import { css, injectGlobal } from 'emotion'
import React from 'react'
import Container from 'src/components/Container'
import ExpressionExecutor from 'src/components/ExpressionExecutor'
import Flex from 'src/components/Flex'
import GlobalStyles from 'src/components/GlobalStyles'
import 'src/lib/fontAwesome'
import { activeTestCases } from 'src/lib/testCaseExpressionContainers'
import spaces from 'src/lib/theme/spaces'

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
  <GlobalStyles>
    <Container>
      <Flex
        className={css`
          flex-direction: column;
          align-items: flex-start;
        `}
      >
        {activeTestCases.map((e, index) => (
          <div
            className={css`
              margin-bottom: ${spaces(12)};
            `}
            key={index}
          >
            <ExpressionExecutor expressionContainer={e} />
          </div>
        ))}
      </Flex>
    </Container>
  </GlobalStyles>
)

export default Home
