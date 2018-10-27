import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import BorderWrapper from 'src/components/Yc/BorderWrapper'
import CallExpressionBox from 'src/components/Yc/CallExpressionBox'
import FunctionExpressionBox from 'src/components/Yc/FunctionExpressionBox'
import VariableExpressionBox from 'src/components/Yc/VariableExpressionBox'
import { isCall, isVariable } from 'src/lib/yc/expressionTypeGuards'
import { Expression } from 'src/types/yc/ExpressionTypes'

interface ExpressionBoxProps {
  expression: Expression
  isDone?: boolean
}

const ExpressionBox: React.SFC<ExpressionBoxProps> = ({ expression }) => (
  <Flex
    className={css`
      width: 100%;
      height: 100%;
      position: relative;
    `}
  >
    <BorderWrapper
      highlightType={isVariable(expression) ? expression.highlightType : 'none'}
    >
      {(() => {
        if (isVariable(expression)) {
          return <VariableExpressionBox expression={expression} />
        } else if (isCall(expression)) {
          return <CallExpressionBox expression={expression} />
        } else {
          return <FunctionExpressionBox expression={expression} />
        }
      })()}
    </BorderWrapper>
  </Flex>
)

export default ExpressionBox
