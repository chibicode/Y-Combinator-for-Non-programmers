/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ExpressionPriorityContext from 'src/components/ExpressionPriorityContext'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/ExpressionBox'
import maxNestedFunctionDepth from 'scripts/lib/maxNestedFunctionDepth'
import { FunctionExpression } from 'src/types/ExpressionTypes'
import plusOneSvg from 'src/images/plusOne.url.svg'
import minusOneSvg from 'src/images/minusOne.url.svg'

interface FunctionExpressionBoxProps {
  expression: FunctionExpression
}

const FunctionExpressionBox = ({ expression }: FunctionExpressionBoxProps) => {
  return (
    <Flex
      css={[
        css`
          flex: 1;
        `,
        expression.meta === 'plusOneEffect' &&
          css`
            background-image: url(${plusOneSvg});
            background-size: 4em;
            background-position: center center;
          `,
        expression.meta === 'minusOneEffect' &&
          css`
            background-image: url(${minusOneSvg});
            background-size: 4em;
            background-position: center center;
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
            flex-grow: ${maxNestedFunctionDepth(expression.body) + 1};
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
