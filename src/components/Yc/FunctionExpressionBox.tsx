/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import colors from 'src/lib/theme/colors'
import maxNestedFunctionDepth from 'src/lib/yc/maxNestedFunctionDepth'
import { FunctionExpression } from 'src/types/yc/ExpressionTypes'
export const jsxBabelFix = jsx

interface FunctionExpressionBoxProps {
  expression: FunctionExpression
}

const FunctionExpressionBox: React.FC<FunctionExpressionBoxProps> = ({
  expression
}) => (
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
)

export default FunctionExpressionBox
