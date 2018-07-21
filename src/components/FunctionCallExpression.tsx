import { css } from 'emotion'
import React from 'react'
import Expression from '../components/Expression'
import Flex from '../components/Flex'
import InlineFlex from '../components/InlineFlex'

interface FunctionCallProps {
  expression: ExpressionTypes.CallExpression
  isOuterMost?: boolean
  highlightVariable?: string
}

const FunctionCallExpression: React.SFC<FunctionCallProps> = ({
  expression
}) => (
  <InlineFlex
    border={2}
    borderColor="darkYellow"
    className={css`
      overflow: hidden;
    `}
  >
    <Flex flexDirection="column">
      <Flex justifyContent="center" borderBottom={1} borderColor="darkYellow">
        <Expression expression={expression.arg} />
      </Flex>
      <Flex borderTop={1} borderColor="darkYellow" justifyContent="center">
        <Expression expression={expression.func} />
      </Flex>
    </Flex>
  </InlineFlex>
)

export default FunctionCallExpression
