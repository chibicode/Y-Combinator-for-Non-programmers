import { css } from 'emotion'
import React, { Fragment } from 'react'
import BorderWrapper from '../components/BorderWrapper'
import Expression from '../components/Expression'
import Flex from '../components/Flex'

interface FunctionCallProps {
  expression: ExpressionTypes.CallExpression
}

const FunctionCallExpression: React.SFC<FunctionCallProps> = ({
  expression
}) => (
  <BorderWrapper>
    <Flex
      flexDirection="column"
      className={css`
        margin-bottom: -2px;
      `}
    >
      {expression.map(e => (
        <Fragment>
          <Flex
            justifyContent="center"
            borderBottom={2}
            borderColor="darkYellow"
          >
            ...
          </Flex>
          <Flex
            justifyContent="center"
            borderBottom={2}
            borderColor="darkYellow"
          >
            <Expression expression={e} />
          </Flex>
        </Fragment>
      ))}
    </Flex>
  </BorderWrapper>
)

export default FunctionCallExpression
