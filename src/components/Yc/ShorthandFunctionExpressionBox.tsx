/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Emoji from 'src/components/Emoji'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionRunnerContext from 'src/components/Yc/ExpressionRunnerContext'
import shorthandFunctionEmojiMapping from 'src/lib/yc/shorthandFunctionEmojiMapping'
import { ShorthandFunctionExpression } from 'src/types/yc/ExpressionTypes'
import {
  variableExpressionBoxPaddingTop,
  variableExpressionBoxPaddingBottom,
  variableExpressionBoxFontSize
} from 'src/components/Yc/VariableExpressionBox'

interface ShorthandFunctionExpressionBoxProps {
  expression: ShorthandFunctionExpression
}

const ShorthandFunctionExpressionBox = ({
  expression
}: ShorthandFunctionExpressionBoxProps) => {
  const { variableSize } = useContext(ExpressionRunnerContext)
  return (
    <>
      <FlexCenter
        css={css`
          flex: 1;
          font-size: ${variableExpressionBoxFontSize(variableSize)};
          padding: ${variableExpressionBoxPaddingTop(variableSize)} 0
            ${variableExpressionBoxPaddingBottom(variableSize)};
        `}
      >
        <span
          css={css`
            position: relative;
          `}
        >
          {shorthandFunctionEmojiMapping[expression.name].map(emoji => (
            <Emoji size="sm" key={emoji}>
              {emoji}
            </Emoji>
          ))}
        </span>
      </FlexCenter>
    </>
  )
}

export default ShorthandFunctionExpressionBox
