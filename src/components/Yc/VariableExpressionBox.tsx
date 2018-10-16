import { css } from 'emotion'
import React from 'react'
import Emoji from 'src/components/Emoji'
import FlexCenter from 'src/components/FlexCenter'
import EmojiBadge from 'src/components/Yc/EmojiBadge'
import ExpressionBetaReducePreviewContext from 'src/components/Yc/ExpressionBetaReducePreviewContext'
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
    lg: spaces(0.5),
    md: spaces(0.375),
    sm: spaces(0.25)
  }[size])

const paddingBottom = (size: ExpressionRunnerContextProps['variableSize']) =>
  ({
    lg: spaces(0.75),
    md: spaces(0.5),
    sm: spaces(0.25)
  }[size])

const fontSize = (size: ExpressionRunnerContextProps['variableSize']) =>
  ({
    lg: fontSizes(2.5),
    md: fontSizes(2),
    sm: fontSizes(1.5)
  }[size])

const VariableExpressionBox: React.SFC<VariableExpressionBoxProps> = ({
  expression
}) => (
  <ExpressionBetaReducePreviewContext.Consumer>
    {({ betaReducePreview, wasJustBetaReduced }) => (
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
                      highlightType && <EmojiBadge badgeType={highlightType} />}
                    {betaReducePreview === 'after' &&
                      wasJustBetaReduced && (
                        <EmojiBadge badgeType="wasJustBetaReduced" />
                      )}
                  </span>
                </span>
              </FlexCenter>
            )}
          </ExpressionRunnerContext.Consumer>
        )}
      </ExpressionHighlighterContext.Consumer>
    )}
  </ExpressionBetaReducePreviewContext.Consumer>
)

export default VariableExpressionBox
