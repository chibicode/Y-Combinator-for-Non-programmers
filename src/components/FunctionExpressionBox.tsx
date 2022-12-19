import { css } from '@emotion/react'
import ExpressionPriorityContext from 'src/components/ExpressionPriorityContext'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/ExpressionBox'
import { FunctionExpression } from 'src/types/ExpressionTypes'

interface FunctionExpressionBoxProps {
  expression: FunctionExpression
}

const FunctionExpressionBox = ({ expression }: FunctionExpressionBoxProps) => {
  return (
    <Flex
      css={[
        css`
          flex: 1;
        `
      ]}
    >
      <FlexCenter
        css={css`
          flex-grow: 1;
          flex-basis: 0;
        `}
      >
        <ExpressionBox expression={expression.arg} />
      </FlexCenter>
      <ExpressionPriorityContext.Provider
        value={{
          activePriority: undefined
        }}
      >
        <FlexCenter
          css={css`
            flex-grow: ${(expression.body.maxNestedFunctionDepth || 0) + 1};
            flex-basis: 0;
          `}
        >
          <ExpressionBox expression={expression.body} />
        </FlexCenter>
      </ExpressionPriorityContext.Provider>
    </Flex>
  )
}

export default FunctionExpressionBox
