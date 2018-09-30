import { css } from 'emotion'
import React from 'react'
import ExpressionPrioritiesLabel from 'src/components/Yc/ExpressionPrioritiesLabel'
import Flex from 'src/components/Flex'
import FunctionExpressionBox from 'src/components/Yc/FunctionExpressionBox'
import VariableExpressionBox from 'src/components/Yc/VariableExpressionBox'
import BorderWrapper from 'src/components/Yc/BorderWrapper'
import CallExpressionBox from 'src/components/Yc/CallExpressionBox'
import {
  isPrioritizedCallExpression,
  isPrioritizedVariableExpression,
  PrioritizedExpression
} from 'src/types/yc/PrioritizedExpressionTypes'

interface ExpressionBoxProps {
  expression: PrioritizedExpression
}

const ExpressionBox: React.SFC<ExpressionBoxProps> = ({ expression }) => (
  <Flex
    className={css`
      width: 100%;
      height: 100%;
      position: relative;
    `}
  >
    <BorderWrapper state={expression.state}>
      {/* TODO: Only show first two (the second one behind
      the first) and hide the rest under a click */}
      {isPrioritizedVariableExpression(expression) && (
        <ExpressionPrioritiesLabel
          priorities={expression.argPriorityAgg}
          position="topleft"
        />
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
        <ExpressionPrioritiesLabel
          priorities={expression.funcPriorityAgg}
          position="bottomleft"
        />
      )}
    </BorderWrapper>
  </Flex>
)

export default ExpressionBox
