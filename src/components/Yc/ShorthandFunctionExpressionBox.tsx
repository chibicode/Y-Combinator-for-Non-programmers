/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Emoji from 'src/components/Emoji'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionPrioritiesLabel from 'src/components/Yc/ExpressionPrioritiesLabel'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import { fontSizes, spaces } from 'src/lib/theme'
import { ShorthandFunctionExpression } from 'src/types/yc/ExpressionTypes'

interface ShorthandFunctionExpressionBoxProps {
  expression: ShorthandFunctionExpression
}

export const variableExpressionBoxPaddingTop = (
  size: ExpressionRunnerContextProps['variableSize']
) =>
  ({
    lg: spaces(0.375),
    md: spaces(0.25),
    sm: spaces(0.2)
  }[size])

export const variableExpressionBoxPaddingBottom = (
  size: ExpressionRunnerContextProps['variableSize']
) =>
  ({
    lg: spaces(0.5),
    md: spaces(0.375),
    sm: spaces(0.25)
  }[size])

export const variableExpressionBoxFontSize = (
  size: ExpressionRunnerContextProps['variableSize']
) =>
  ({
    lg: fontSizes(2),
    md: fontSizes(1.6),
    sm: fontSizes(1.4)
  }[size])

const VariableExpressionBox = ({
  expression
}: ShorthandFunctionExpressionBoxProps) => {
  const { hidePriorities, variableSize, showOnlyFocused } = useContext(
    ExpressionRunnerContext
  )
  if (showOnlyFocused) {
    return <></>
  } else {
    return (
      <>
        {!hidePriorities && (
          <ExpressionPrioritiesLabel
            priorities={expression.argPriorityAgg}
            position="topleft"
            emphasize={expression.emphasizePriority}
          />
        )}
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
            <Emoji size="sm">➖</Emoji>
            <Emoji size="sm">1️⃣</Emoji>
          </span>
        </FlexCenter>
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
}

export default VariableExpressionBox
