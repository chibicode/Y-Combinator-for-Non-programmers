import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import BorderWrapper from 'src/components/Yc/BorderWrapper'
import CallExpressionBox from 'src/components/Yc/CallExpressionBox'
import ExpressionHighlighterContext, {
  ExpressionHighlighterContextProps
} from 'src/components/Yc/ExpressionHighlighterContext'
import ExpressionPrioritiesLabel from 'src/components/Yc/ExpressionPrioritiesLabel'
import ExpressionRunnerContext from 'src/components/Yc/ExpressionRunnerContext'
import FunctionExpressionBox from 'src/components/Yc/FunctionExpressionBox'
import VariableExpressionBox from 'src/components/Yc/VariableExpressionBox'
import {
  isHighlightedState,
  isPrioritizedCallExpression,
  isPrioritizedVariableExpression
} from 'src/lib/yc/expressionTypeGuards'
import { PrioritizedExpression } from 'src/types/yc/ExpressionTypes'

interface ExpressionBoxProps {
  expression: PrioritizedExpression
  isDone?: boolean
}

const childVariableHighlightType = (
  expression: PrioritizedExpression,
  state: ExpressionHighlighterContextProps['state'],
  highlightType?: ExpressionHighlighterContextProps['highlightType']
) => {
  if (isPrioritizedVariableExpression(expression)) {
    if (state && isHighlightedState(state) && highlightType) {
      return highlightType
    }
  }
}

const ExpressionBox: React.SFC<ExpressionBoxProps> = ({ expression }) => (
  <ExpressionRunnerContext.Consumer>
    {({ hidePriorities }) => (
      <ExpressionHighlighterContext.Consumer>
        {({ state, highlightType }) => (
          <Flex
            className={css`
              width: 100%;
              height: 100%;
              position: relative;
            `}
          >
            <BorderWrapper
              state={state || expression.state}
              childVariableJustAlphaConverted={
                isPrioritizedVariableExpression(expression) &&
                expression.justAlphaConverted
              }
              childVariableName={
                isPrioritizedVariableExpression(expression)
                  ? expression.name
                  : undefined
              }
              childVariableHighlightType={childVariableHighlightType(
                expression,
                state,
                highlightType
              )}
              childVariableWillBeBetaReduced={
                isPrioritizedVariableExpression(expression)
                  ? expression.willBeBetaReduced
                  : undefined
              }
              childWasJustBetaReduced={
                isPrioritizedVariableExpression(expression)
                  ? expression.wasJustBetaReduced
                  : undefined
              }
            >
              {!hidePriorities &&
                isPrioritizedVariableExpression(expression) && (
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
              {!hidePriorities &&
                isPrioritizedVariableExpression(expression) && (
                  <ExpressionPrioritiesLabel
                    priorities={expression.funcPriorityAgg}
                    position="bottomleft"
                  />
                )}
            </BorderWrapper>
          </Flex>
        )}
      </ExpressionHighlighterContext.Consumer>
    )}
  </ExpressionRunnerContext.Consumer>
)

export default ExpressionBox
