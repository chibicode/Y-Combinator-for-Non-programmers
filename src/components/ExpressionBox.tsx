/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Flex from 'src/components/Flex'
import BorderWrapper, { BorderWrapperProps } from 'src/components/BorderWrapper'
import CallExpressionBox from 'src/components/CallExpressionBox'
import FunctionExpressionBox from 'src/components/FunctionExpressionBox'
import VariableExpressionBox from 'src/components/VariableExpressionBox'
import ConditionalExpressionBox from 'src/components/ConditionalExpressionBox'
import { isCall, isVariable, isFunction } from 'src/lib/expressionTypeGuards'
import { Expression } from 'src/types/ExpressionTypes'
import ExpressionRunnerContext from 'src/components/ExpressionRunnerContext'

interface ExpressionBoxProps {
  expression: Expression
  topLevel: boolean
}

const ExpressionBox = ({ expression, topLevel }: ExpressionBoxProps) => {
  const expressionRunnerContext = useContext(ExpressionRunnerContext)
  const {
    highlightOverrides,
    highlightFunctions,
    highlightAllChildren,
    started,
    highlightOverrideActiveAfterStart,
    highlightOverridesCallArgAndFuncUnboundOnly,
    argPriorityAggHighlights,
    funcPriorityAggHighlights
  } = expressionRunnerContext
  let highlightOverridden: BorderWrapperProps['highlightOverridden'] = !!(
    isVariable(expression) &&
    (!started || highlightOverrideActiveAfterStart) &&
    highlightOverrides[expression.name]
  )
  let highlightType: BorderWrapperProps['highlightType'] = isVariable(
    expression
  )
    ? ((!started || highlightOverrideActiveAfterStart) &&
        highlightOverrides[expression.name]) ||
      expression.highlightType
    : 'none'

  if (
    highlightOverridesCallArgAndFuncUnboundOnly &&
    isVariable(expression) &&
    (expression.bottomRightBadgeType !== 'callArg' &&
      expression.bottomRightBadgeType !== 'funcUnbound')
  ) {
    highlightOverridden = false
    highlightType = expression.highlightType
  }

  if (
    isVariable(expression) &&
    (argPriorityAggHighlights.length > 0 &&
      argPriorityAggHighlights.filter(x =>
        expression.argPriorityAgg.includes(x)
      ).length > 0)
  ) {
    highlightOverridden = true
    highlightType = 'highlighted'
  }

  if (
    isVariable(expression) &&
    (funcPriorityAggHighlights.length > 0 &&
      funcPriorityAggHighlights.filter(x =>
        expression.funcPriorityAgg.includes(x)
      ).length > 0)
  ) {
    highlightOverridden = true
    highlightType = 'blue'
  }

  return (
    <ExpressionRunnerContext.Provider
      value={{
        ...expressionRunnerContext,
        highlightAllChildren:
          (highlightFunctions && isFunction(expression)) || highlightAllChildren
      }}
    >
      <Flex
        css={css`
          width: 100%;
          height: 100%;
          position: relative;
        `}
      >
        <BorderWrapper
          topLevel={topLevel}
          highlightOverridden={highlightOverridden}
          highlightType={highlightType}
          bottomRightBadgeType={
            isVariable(expression) ? expression.bottomRightBadgeType : 'none'
          }
          topLeftBadgeType={
            isVariable(expression) ? expression.topLeftBadgeType : 'none'
          }
          isQuestion={
            isVariable(expression) ? expression.name === 'question' : false
          }
        >
          {(() => {
            if (isVariable(expression)) {
              return <VariableExpressionBox expression={expression} />
            } else if (isCall(expression)) {
              return <CallExpressionBox expression={expression} />
            } else if (isFunction(expression)) {
              return <FunctionExpressionBox expression={expression} />
            } else {
              return <ConditionalExpressionBox expression={expression} />
            }
          })()}
        </BorderWrapper>
      </Flex>
    </ExpressionRunnerContext.Provider>
  )
}

ExpressionBox.defaultProps = {
  topLevel: false
}

export default ExpressionBox
