import { css } from 'emotion'
import React from 'react'
import Emoji from 'src/components/Emoji'
import EmojiBadge from 'src/components/EmojiBadge'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionHighlighterContext from 'src/components/Yc/ExpressionHighlighterContext'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import { fontSizes, spaces } from 'src/lib/theme'
import letterEmojiMapping from 'src/lib/yc/letterEmojiMapping'
import { PrioritizedVariableExpression } from 'src/types/yc/PrioritizedExpressionTypes'

interface VariableExpressionBoxProps {
  expression: PrioritizedVariableExpression
}

const paddingTop = (size: ExpressionRunnerContextProps['variableSize']) =>
  ({
    lg: spaces(1.25),
    sm: spaces(0.5)
  }[size])

const paddingBottom = (size: ExpressionRunnerContextProps['variableSize']) =>
  ({
    lg: spaces(1),
    sm: spaces(0.25)
  }[size])

const fontSize = (size: ExpressionRunnerContextProps['variableSize']) =>
  ({
    lg: fontSizes(2),
    sm: fontSizes(1.5)
  }[size])

const VariableExpressionBox: React.SFC<VariableExpressionBoxProps> = ({
  expression
}) => (
  <ExpressionHighlighterContext.Consumer>
    {({ state }) => (
      <ExpressionRunnerContext.Consumer>
        {({ variableSize }) => (
          <FlexCenter
            className={css`
              flex: 1;
              font-size: ${fontSize(variableSize)};
              padding: ${paddingTop(variableSize)} 0
                ${paddingBottom(variableSize)};
            `}
          >
            <span
              className={css`
                position: relative;
              `}
            >
              <Emoji>{letterEmojiMapping[expression.name]}</Emoji>
              <span
                className={css`
                  position: absolute;
                  top: 20px;
                  left: 20px;
                `}
              >
                {(state === 'highlighted' || state === 'justHighlighted') && (
                  <EmojiBadge />
                )}
              </span>
            </span>
          </FlexCenter>
        )}
      </ExpressionRunnerContext.Consumer>
    )}
  </ExpressionHighlighterContext.Consumer>
)

export default VariableExpressionBox
