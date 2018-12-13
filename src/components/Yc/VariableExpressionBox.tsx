/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import Emoji from 'src/components/Emoji'
import FlexCenter from 'src/components/FlexCenter'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import ExpressionPrioritiesLabel from 'src/components/Yc/ExpressionPrioritiesLabel'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import TopRightBadge from 'src/components/Yc/TopRightBadge'
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
    sm: spaces(0.2)
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

const VariableExpressionBox: React.FunctionComponent<VariableExpressionBoxProps> = ({
  expression
}) => (
  <ExpressionRunnerContext.Consumer>
    {({ hidePriorities, variableSize }) => (
      <>
        {!hidePriorities && (
          <ExpressionPrioritiesLabel
            priorities={expression.argPriorityAgg}
            position="topleft"
            emphasize={expression.highlightType === 'activeEmphasizePriority'}
          />
        )}
        <FlexCenter
          css={css`
            flex: 1;
            font-size: ${fontSize(variableSize)};
            padding: ${paddingTop(variableSize)} 0
              ${paddingBottom(variableSize)};
          `}
        >
          <span
            css={css`
              position: relative;
            `}
          >
            <Emoji>{letterEmojiMapping[expression.name]}</Emoji>
            {expression.bottomRightBadgeType !== 'none' && (
              <span
                css={css`
                  position: absolute;
                  right: -0.2em;
                  bottom: 0;
                  z-index: ${zIndices('badge')};
                `}
              >
                <BottomRightBadge
                  bottomRightBadgeType={expression.bottomRightBadgeType}
                />
              </span>
            )}
            {expression.topRightBadgeType !== 'none' && (
              <span
                css={css`
                  position: absolute;
                  right: -0.18em;
                  top: 0;
                  z-index: ${zIndices('badge')};
                `}
              >
                <TopRightBadge
                  topRightBadgeType={expression.topRightBadgeType}
                />
              </span>
            )}
          </span>
        </FlexCenter>
        {!hidePriorities && (
          <ExpressionPrioritiesLabel
            priorities={expression.funcPriorityAgg}
            position="bottomleft"
            emphasize={expression.highlightType === 'activeEmphasizePriority'}
          />
        )}
      </>
    )}
  </ExpressionRunnerContext.Consumer>
)

export default VariableExpressionBox
