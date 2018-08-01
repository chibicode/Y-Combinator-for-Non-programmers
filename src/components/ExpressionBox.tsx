import { css } from 'emotion'
import React from 'react'
import BorderWrapper from 'src/components/BorderWrapper'
import CallExpressionBox from 'src/components/CallExpressionBox'
import Flex from 'src/components/Flex'
import FunctionExpressionBox from 'src/components/FunctionExpressionBox'
import VariableExpressionBox from 'src/components/VariableExpressionBox'
import {
  isPrioritizedCallExpression,
  isPrioritizedVariableExpression,
  PrioritizedExpression
} from 'src/types/PrioritizedExpressionTypes'

interface ExpressionProps {
  expression: PrioritizedExpression
}

const ExpressionBox: React.SFC<ExpressionProps> = ({ expression }) => (
  <Flex
    width={1}
    className={css`
      height: 100%;
    `}
  >
    <BorderWrapper state={expression.state}>
      {(() => {
        if (isPrioritizedVariableExpression(expression)) {
          return <VariableExpressionBox expression={expression} />
        } else if (isPrioritizedCallExpression(expression)) {
          return <CallExpressionBox expression={expression} />
        } else {
          return <FunctionExpressionBox expression={expression} />
        }
      })()}
    </BorderWrapper>
  </Flex>
)

export default ExpressionBox
