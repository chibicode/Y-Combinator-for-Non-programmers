/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Emoji from 'src/components/Emoji'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionPrioritiesLabel from 'src/components/Yc/ExpressionPrioritiesLabel'
import ExpressionRunnerContext from 'src/components/Yc/ExpressionRunnerContext'
import shorthandFunctionEmojiMapping from 'src/lib/yc/shorthandFunctionEmojiMapping'
import { ShorthandFunctionExpression } from 'src/types/yc/ExpressionTypes'
import {
  variableExpressionBoxPaddingTop,
  variableExpressionBoxPaddingBottom,
  variableExpressionBoxFontSize
} from 'src/components/Yc/VariableExpressionBox'
import ExpressionBox from 'src/components/Yc/ExpressionBox'

interface ShorthandFunctionExpressionBoxProps {
  expression: ShorthandFunctionExpression
}

const ShorthandFunctionExpressionBox = ({
  expression
}: ShorthandFunctionExpressionBoxProps) => {
  const { hidePriorities, variableSize } = useContext(ExpressionRunnerContext)
  const shorthand = (
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
  )
  return (
    <>
      {!hidePriorities && (
        <ExpressionPrioritiesLabel
          priorities={expression.argPriorityAgg}
          position="topleft"
          emphasize={expression.emphasizePriority}
        />
      )}
      {expression.args && expression.args.length === 2 ? (
        <Flex
          css={css`
            flex-direction: column;
            flex: 1;
          `}
        >
          <ExpressionBox expression={expression.args[0]} />
          <ExpressionBox expression={expression.args[1]} />
          {shorthand}
        </Flex>
      ) : (
        shorthand
      )}
      {!hidePriorities && (
        <ExpressionPrioritiesLabel
          priorities={expression.funcPriorityAgg}
          position="bottomleft"
          emphasize={expression.emphasizePriority}
        />
      )}
    </>
  )
}

export default ShorthandFunctionExpressionBox
