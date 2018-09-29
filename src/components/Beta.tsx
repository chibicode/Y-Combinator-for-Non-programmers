import { css } from 'emotion'
import React from 'react'
import Container from 'src/components/Container'
import ExpressionExecutor from 'src/components/ExpressionExecutor'
import Flex from 'src/components/Flex'
import GlobalStyles from 'src/components/GlobalStyles'
import 'src/lib/fontAwesome'
import { activeTestCases } from 'src/lib/yc/testCaseExpressionContainers'
import spaces from 'src/lib/theme/spaces'

const Beta: React.SFC<{}> = () => (
  <GlobalStyles>
    <Container size="lg">
      <Flex
        className={css`
          flex-direction: column;
          align-items: flex-start;
        `}
      >
        {activeTestCases.map((e, index) => (
          <div
            className={css`
              margin-bottom: ${spaces(0.75)};
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

export default Beta
