import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import ExpressionHighlighterContext, {
  convertAllExpressionStates
} from 'src/components/Yc/ExpressionHighlighterContext'
import ExpressionReadyToHighlightContext, {
  convertCallexpressionStates
} from 'src/components/Yc/ExpressionReadyToHighlightContext'
import colors from 'src/lib/theme/colors'
import { PrioritizedCallExpression } from 'src/types/yc/PrioritizedExpressionTypes'

interface CallExpressionBoxProps {
  expression: PrioritizedCallExpression
}

const CallExpressionBox: React.SFC<CallExpressionBoxProps> = ({
  expression
}) => (
  <ExpressionReadyToHighlightContext.Consumer>
    {({ readyToHighlight, disableReadyToHighlightColoring }) => (
      <ExpressionReadyToHighlightContext.Provider
        value={{
          readyToHighlight:
            readyToHighlight || convertCallexpressionStates(expression.state),
          disableReadyToHighlightColoring
        }}
      >
        <Flex
          className={css`
            flex-direction: column;
            flex: 1;
          `}
        >
          <FlexCenter
            className={css`
              border-bottom: 1px solid ${colors('grey300')};
            `}
          >
            <ExpressionHighlighterContext.Consumer>
              {({ state, highlightType }) => (
                <ExpressionHighlighterContext.Provider
                  value={{
                    state:
                      state || convertAllExpressionStates(expression.arg.state),
                    highlightType: highlightType || 'callArg'
                  }}
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
            <ExpressionBox expression={expression.func} />
          </FlexCenter>
        </Flex>
      </ExpressionReadyToHighlightContext.Provider>
    )}
  </ExpressionReadyToHighlightContext.Consumer>
)

export default CallExpressionBox
