import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import ExpressionHighlighterContext, {
  convertAllExpressionStates,
  ExpressionHighlighterContextProps
} from 'src/components/Yc/ExpressionHighlighterContext'
import colors from 'src/lib/theme/colors'
import maxNestedFunctionDepth from 'src/lib/yc/maxNestedFunctionDepth'
import {
  PrioritizedExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression
} from 'src/types/yc/PrioritizedExpressionTypes'

interface FunctionExpressionBoxProps {
  expression: PrioritizedFunctionExpression
}

const argHighlighterContext = ({
  arg,
  currentContext
}: {
  arg: PrioritizedVariableExpression
  currentContext: ExpressionHighlighterContextProps
}): ExpressionHighlighterContextProps => {
  if (currentContext.highlightType === 'callArg') {
    return currentContext
  } else if (
    arg.state === 'unboundHighlighted' ||
    arg.state === 'unboundJustHighlighted'
  ) {
    return {
      state: arg.state,
      highlightType: 'funcBodyUnbound'
    }
  } else if (arg.state === 'justHighlighted' || arg.state === 'highlighted') {
    return {
      state: arg.state,
      highlightType: 'funcArg'
    }
  } else {
    return {
      state: currentContext.state || convertAllExpressionStates(arg.state),
      highlightType: currentContext.highlightType || 'funcArg'
    }
  }
}

const bodyHighlighterContext = ({
  body,
  currentContext
}: {
  body: PrioritizedExpression
  currentContext: ExpressionHighlighterContextProps
}): ExpressionHighlighterContextProps => {
  if (
    body.state === 'boundHighlighted' ||
    body.state === 'boundJustHighlighted'
  ) {
    return {
      state: body.state,
      highlightType: 'funcBodyBound'
    }
  } else if (body.state === 'justHighlighted' || body.state === 'highlighted') {
    return {
      state: body.state,
      highlightType: 'funcBody'
    }
  } else {
    return {
      state: currentContext.state || convertAllExpressionStates(body.state),
      highlightType: currentContext.highlightType || 'funcBody'
    }
  }
}

const FunctionExpressionBox: React.SFC<FunctionExpressionBoxProps> = ({
  expression
}) => (
  <Flex
    className={css`
      flex: 1;
    `}
  >
    <FlexCenter
      className={css`
        flex-grow: 1;
        flex-basis: 0;
        border-right: 1px solid ${colors('grey300')};
      `}
    >
      <ExpressionHighlighterContext.Consumer>
        {({ state, highlightType }) => (
          <ExpressionHighlighterContext.Provider
            value={argHighlighterContext({
              arg: expression.arg,
              currentContext: { state, highlightType }
            })}
          >
            <ExpressionBox expression={expression.arg} />
          </ExpressionHighlighterContext.Provider>
        )}
      </ExpressionHighlighterContext.Consumer>
    </FlexCenter>
    <FlexCenter
      className={css`
        flex-grow: ${maxNestedFunctionDepth(expression.body) + 1};
        flex-basis: 0;
        border-left: 1px solid ${colors('grey300')};
      `}
    >
      <ExpressionHighlighterContext.Consumer>
        {({ state, highlightType }) => (
          <ExpressionHighlighterContext.Provider
            value={bodyHighlighterContext({
              body: expression.body,
              currentContext: { state, highlightType }
            })}
          >
            <ExpressionBox expression={expression.body} />
          </ExpressionHighlighterContext.Provider>
        )}
      </ExpressionHighlighterContext.Consumer>
    </FlexCenter>
  </Flex>
)

export default FunctionExpressionBox
