import { css } from 'emotion'
import React from 'react'
import Container from 'src/components/Container'
import ExpressionExecutor from 'src/components/ExpressionExecutor'
import Flex from 'src/components/Flex'
import GlobalStyles from 'src/components/GlobalStyles'
import 'src/lib/fontAwesome'
import { activeTestCases } from 'src/lib/testCaseExpressionContainers'
import spaces from 'src/lib/theme/spaces'

const Beta: React.SFC<{}> = () => (
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
      {process.env.APP_LOCALE}
    </Container>
  </GlobalStyles>
)

export default Beta
