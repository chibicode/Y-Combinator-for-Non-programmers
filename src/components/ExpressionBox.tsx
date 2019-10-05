/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Flex from 'src/components/Flex'
import BorderWrapper, { BorderWrapperProps } from 'src/components/BorderWrapper'
import CallExpressionBox from 'src/components/CallExpressionBox'
import RepeatExpressionBox from 'src/components/RepeatExpressionBox'
import FunctionExpressionBox from 'src/components/FunctionExpressionBox'
import BinaryExpressionBox from 'src/components/BinaryExpressionBox'
import VariableExpressionBox from 'src/components/VariableExpressionBox'
import ConditionalExpressionBox from 'src/components/ConditionalExpressionBox'
import {
  isCall,
  isVariable,
  isFunction,
  isConditional,
  isBinary
} from 'src/lib/expressionTypeGuards'
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
    highlightOverridesCallArgAndFuncUnboundOnly
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
        >
          {(() => {
            if (isVariable(expression)) {
              return <VariableExpressionBox expression={expression} />
            } else if (isCall(expression)) {
              return <CallExpressionBox expression={expression} />
            } else if (isFunction(expression)) {
              return <FunctionExpressionBox expression={expression} />
            } else if (isConditional(expression)) {
              return <ConditionalExpressionBox expression={expression} />
            } else if (isBinary(expression)) {
              return <BinaryExpressionBox expression={expression} />
            } else {
              return <RepeatExpressionBox expression={expression} />
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
