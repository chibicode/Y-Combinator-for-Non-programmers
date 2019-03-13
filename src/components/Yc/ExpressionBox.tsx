/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Flex from 'src/components/Flex'
import BorderWrapper from 'src/components/Yc/BorderWrapper'
import CallExpressionBox from 'src/components/Yc/CallExpressionBox'
import FunctionExpressionBox from 'src/components/Yc/FunctionExpressionBox'
import VariableExpressionBox from 'src/components/Yc/VariableExpressionBox'
import { isCall, isVariable } from 'src/lib/yc/expressionTypeGuards'
import { Expression } from 'src/types/yc/ExpressionTypes'
export const jsxBabelFix = jsx

interface ExpressionBoxProps {
  expression: Expression
}

const ExpressionBox: React.FC<ExpressionBoxProps> = ({ expression }) => (
  <Flex
    css={css`
      width: 100%;
      height: 100%;
      position: relative;
    `}
  >
    <BorderWrapper
      highlightType={isVariable(expression) ? expression.highlightType : 'none'}
      bottomRightBadgeType={
        isVariable(expression) ? expression.bottomRightBadgeType : 'none'
      }
      topRightBadgeType={
        isVariable(expression) ? expression.topRightBadgeType : 'none'
      }
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
