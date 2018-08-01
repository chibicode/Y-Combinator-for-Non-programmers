import { css } from 'emotion'
import React from 'react'
import BorderWrapper from 'src/components/BorderWrapper'
import CallExpression from 'src/components/CallExpression'
import Flex from 'src/components/Flex'
import FunctionExpression from 'src/components/FunctionExpression'
import VariableExpression from 'src/components/VariableExpression'
import {
  isPrioritizedCallExpression,
  isPrioritizedVariableExpression,
  PrioritizedExpression
} from 'src/types/PrioritizedExpressionTypes'

interface ExpressionProps {
  expression: PrioritizedExpression
}

const Expression: React.SFC<ExpressionProps> = ({ expression }) => (
  <Flex
    width={1}
    className={css`
      height: 100%;
    `}
  >
    <BorderWrapper state={expression.state}>
      {(() => {
        if (isPrioritizedVariableExpression(expression)) {
          return <VariableExpression expression={expression} />
        } else if (isPrioritizedCallExpression(expression)) {
          return <CallExpression expression={expression} />
        } else {
          return <FunctionExpression expression={expression} />
        }
      })()}
    </BorderWrapper>
  </Flex>
)

export default Expression
