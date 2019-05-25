/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import ExpressionRunnerContext from 'src/components/ExpressionRunnerContext'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/ExpressionBox'
import colors from 'src/lib/theme/colors'
import maxNestedFunctionDepth from 'src/lib/yc/maxNestedFunctionDepth'
import { FunctionExpression } from 'src/types/yc/ExpressionTypes'

interface FunctionExpressionBoxProps {
  expression: FunctionExpression
}

const FunctionExpressionBox = ({ expression }: FunctionExpressionBoxProps) => {
  const expressionRunnerContext = useContext(ExpressionRunnerContext)
  const visible =
    !expressionRunnerContext.showOnlyFocused ||
    (expressionRunnerContext.showOnlyFocused &&
      expression.meta &&
      expression.meta.focused)
  const innerShowOnlyFocused =
    expressionRunnerContext.showOnlyFocused &&
    expression.meta &&
    expression.meta.focused
      ? false
      : expressionRunnerContext.showOnlyFocused

  if (visible) {
    return (
      <ExpressionRunnerContext.Provider
        value={{
          ...expressionRunnerContext,
          showOnlyFocused: innerShowOnlyFocused
        }}
      >
        <Flex
          css={css`
            flex: 1;
          `}
        >
          <FlexCenter
            css={css`
              flex-grow: 1;
              flex-basis: 0;
              border-right: 1px solid ${colors('grey300')};
            `}
          >
            <ExpressionBox expression={expression.arg} />
          </FlexCenter>
          <FlexCenter
            css={css`
              flex-grow: ${maxNestedFunctionDepth(expression.body) + 1};
              flex-basis: 0;
              border-left: 1px solid ${colors('grey300')};
            `}
          >
            <ExpressionBox expression={expression.body} />
          </FlexCenter>
        </Flex>
      </ExpressionRunnerContext.Provider>
    )
  } else {
    return <></>
  }
}

export default FunctionExpressionBox
