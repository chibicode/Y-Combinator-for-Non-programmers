import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import ExpressionHighlighterContext, {
  convertAllExpressionStates
} from 'src/components/Yc/ExpressionHighlighterContext'
import colors from 'src/lib/theme/colors'
import maxNestedFunctionDepth from 'src/lib/yc/maxNestedFunctionDepth'
import { PrioritizedFunctionExpression } from 'src/types/yc/PrioritizedExpressionTypes'

interface FunctionExpressionBoxProps {
  expression: PrioritizedFunctionExpression
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
            value={
              highlightType === 'callArg'
                ? { state, highlightType }
                : {
                    state: convertAllExpressionStates(expression.arg.state),
                    highlightType: 'funcArg'
                  }
            }
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
            value={{
              state: state || convertAllExpressionStates(expression.body.state),
              highlightType: highlightType || 'funcBody'
            }}
          >
            <ExpressionBox expression={expression.body} />
          </ExpressionHighlighterContext.Provider>
        )}
      </ExpressionHighlighterContext.Consumer>
    </FlexCenter>
  </Flex>
)

export default FunctionExpressionBox
