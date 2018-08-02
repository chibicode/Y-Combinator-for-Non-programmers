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

interface ExpressionBoxProps {
  expression: PrioritizedExpression
}

const ExpressionBox: React.SFC<ExpressionBoxProps> = ({ expression }) => (
  <Flex
    width={1}
    className={css`
      height: 100%;
      position: relative;
    `}
  >
    <BorderWrapper state={expression.state}>
      {/* TODO: Only show first two (the second one behind
      the first) and hide the rest under a click */}
      {isPrioritizedVariableExpression(expression) && (
        <div
          className={css`
            position: absolute;
            top: 0;
            left: 0;
          `}
        >
          {expression.argPriorityAgg.join(',')}
        </div>
      )}
      {(() => {
        if (isPrioritizedVariableExpression(expression)) {
          return <VariableExpressionBox expression={expression} />
        } else if (isPrioritizedCallExpression(expression)) {
          return <CallExpressionBox expression={expression} />
        } else {
          return <FunctionExpressionBox expression={expression} />
        }
      })()}
      {isPrioritizedVariableExpression(expression) && (
        <div
          className={css`
            position: absolute;
            bottom: 0;
            left: 0;
          `}
        >
          {expression.funcPriorityAgg.join(',')}
        </div>
      )}
    </BorderWrapper>
  </Flex>
)

export default ExpressionBox
