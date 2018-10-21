import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import ExpressionFocusContext, {
  callExpressionStateToFocused
} from 'src/components/Yc/ExpressionFocusContext'
import ExpressionHighlighterContext, {
  convertAllExpressionStates,
  ExpressionHighlighterContextProps
} from 'src/components/Yc/ExpressionHighlighterContext'
import colors from 'src/lib/theme/colors'
import {
  PrioritizedCallExpression,
  PrioritizedExpression
} from 'src/types/yc/ExpressionTypes'

interface CallExpressionBoxProps {
  expression: PrioritizedCallExpression
}

const argHighlighterContext = ({
  arg,
  currentContext
}: {
  arg: PrioritizedExpression
  currentContext: ExpressionHighlighterContextProps
}): ExpressionHighlighterContextProps => {
  if (currentContext.highlightType === 'callArg') {
    return currentContext
  } else if (
    arg.state === 'boundHighlighted' ||
    arg.state === 'boundJustHighlighted'
  ) {
    return {
      state: arg.state,
      highlightType: 'funcBodyBound'
    }
  } else if (arg.state === 'justHighlighted' || arg.state === 'highlighted') {
    return {
      state: arg.state,
      highlightType: 'callArg'
    }
  } else {
    return {
      state: currentContext.state || convertAllExpressionStates(arg.state),
      highlightType: currentContext.highlightType || 'callArg'
    }
  }
}

const funcHighlighterContext = ({
  func,
  currentContext
}: {
  func: PrioritizedExpression
  currentContext: ExpressionHighlighterContextProps
}): ExpressionHighlighterContextProps => {
  if (
    func.state === 'boundHighlighted' ||
    func.state === 'boundJustHighlighted'
  ) {
    return {
      state: func.state,
      highlightType: 'funcBodyBound'
    }
  } else {
    return {
      state: currentContext.state,
      highlightType: currentContext.highlightType
    }
  }
}

const CallExpressionBox: React.SFC<CallExpressionBoxProps> = ({
  expression
}) => (
  <ExpressionFocusContext.Consumer>
    {({
      focused,
      isDoneOrDefault,
      previouslyChangedExpressionStateReadyToHighlight
    }) => (
      <ExpressionFocusContext.Provider
        value={{
          isDoneOrDefault,
          previouslyChangedExpressionStateReadyToHighlight,
          focused: focused || callExpressionStateToFocused(expression.state),
          parentCallExpressionReadyToHighlight:
            expression.state === 'readyToHighlight'
        }}
      >
        <Flex
          className={css`
            flex-direction: column;
            flex: 1;
          `}
        >
          <FlexCenter>
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
              border-top: 1px solid ${colors('grey300')};
            `}
          >
            <ExpressionHighlighterContext.Consumer>
              {({ state, highlightType }) => (
                <ExpressionHighlighterContext.Provider
                  value={funcHighlighterContext({
                    func: expression.func,
                    currentContext: { state, highlightType }
                  })}
                >
                  <ExpressionBox expression={expression.func} />
                </ExpressionHighlighterContext.Provider>
              )}
            </ExpressionHighlighterContext.Consumer>
          </FlexCenter>
        </Flex>
      </ExpressionFocusContext.Provider>
    )}
  </ExpressionFocusContext.Consumer>
)

export default CallExpressionBox
