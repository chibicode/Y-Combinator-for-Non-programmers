import { css } from 'emotion'
import React from 'react'
import Emoji from 'src/components/Emoji'
import EmojiBadge from 'src/components/EmojiBadge'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionHighlighterContext from 'src/components/Yc/ExpressionHighlighterContext'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import { fontSizes, spaces, zIndices } from 'src/lib/theme'
import letterEmojiMapping from 'src/lib/yc/letterEmojiMapping'
import { PrioritizedVariableExpression } from 'src/types/yc/PrioritizedExpressionTypes'

interface VariableExpressionBoxProps {
  expression: PrioritizedVariableExpression
}

const paddingTop = (size: ExpressionRunnerContextProps['variableSize']) =>
  ({
    lg: spaces(0.75),
    sm: spaces(0.25)
  }[size])

const paddingBottom = (size: ExpressionRunnerContextProps['variableSize']) =>
  ({
    lg: spaces(1),
    sm: spaces(0.25)
  }[size])

const fontSize = (size: ExpressionRunnerContextProps['variableSize']) =>
  ({
    lg: fontSizes(2.5),
    sm: fontSizes(1.5)
  }[size])

const VariableExpressionBox: React.SFC<VariableExpressionBoxProps> = ({
  expression
}) => (
  <ExpressionHighlighterContext.Consumer>
    {({ state, highlightType }) => (
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
                  right: -0.2em;
                  bottom: 0;
                  z-index: ${zIndices('emojiBadge')};
                `}
              >
                {(state === 'highlighted' || state === 'justHighlighted') &&
                  highlightType && (
                    <EmojiBadge state={state} badgeType={highlightType} />
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
