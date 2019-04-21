/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Flex from 'src/components/Flex'
import BorderWrapper from 'src/components/Yc/BorderWrapper'
import CallExpressionBox from 'src/components/Yc/CallExpressionBox'
import FunctionExpressionBox from 'src/components/Yc/FunctionExpressionBox'
import VariableExpressionBox from 'src/components/Yc/VariableExpressionBox'
import { isCall, isVariable } from 'src/lib/yc/expressionTypeGuards'
import { Expression } from 'src/types/yc/ExpressionTypes'
import ExpressionRunnerContext from 'src/components/Yc/ExpressionRunnerContext'

interface ExpressionBoxProps {
  expression: Expression
}

const ExpressionBox = ({ expression }: ExpressionBoxProps) => {
  const { highlightOverrides, started } = useContext(ExpressionRunnerContext)
  return (
    <Flex
      css={css`
        width: 100%;
        height: 100%;
        position: relative;
      `}
    >
      <BorderWrapper
        highlightType={
          isVariable(expression)
            ? (!started && highlightOverrides[expression.name]) ||
              expression.highlightType
            : 'none'
        }
        bottomRightBadgeType={
          isVariable(expression) ? expression.bottomRightBadgeType : 'none'
        }
        topBadgeType={isVariable(expression) ? expression.topBadgeType : 'none'}
        isQuestion={
          isVariable(expression) ? expression.name === 'question' : false
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
}

export default ExpressionBox
