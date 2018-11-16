import { css } from 'emotion'
import React from 'react'
import Emoji from 'src/components/Emoji'
import FlexCenter from 'src/components/FlexCenter'
import EmojiBadge from 'src/components/Yc/EmojiBadge'
import ExpressionPrioritiesLabel from 'src/components/Yc/ExpressionPrioritiesLabel'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import { fontSizes, spaces, zIndices } from 'src/lib/theme'
import letterEmojiMapping from 'src/lib/yc/letterEmojiMapping'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

interface VariableExpressionBoxProps {
  expression: VariableExpression
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
  <ExpressionRunnerContext.Consumer>
    {({ hidePriorities, variableSize }) => (
      <>
        {!hidePriorities && (
          <ExpressionPrioritiesLabel
            priorities={expression.argPriorityAgg}
            position="topleft"
            emphasizeOne={
              expression.highlightType === 'activeEmphasizePriorityOne'
            }
          />
        )}
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
              opacity: ${expression.highlightType === 'semiTransparent'
                ? 0.5
                : 1};
            `}
          >
            <Emoji>{letterEmojiMapping[expression.name]}</Emoji>
            {expression.badgeType !== 'none' && (
              <span
                className={css`
                  position: absolute;
                  right: -0.2em;
                  bottom: 0;
                  z-index: ${zIndices('emojiBadge')};
                `}
              >
                <EmojiBadge badgeType={expression.badgeType} />
              </span>
            )}
          </span>
        </FlexCenter>
        {!hidePriorities && (
          <ExpressionPrioritiesLabel
            priorities={expression.funcPriorityAgg}
            position="bottomleft"
            emphasizeOne={
              expression.highlightType === 'activeEmphasizePriorityOne'
            }
          />
        )}
      </>
    )}
  </ExpressionRunnerContext.Consumer>
)

export default VariableExpressionBox
