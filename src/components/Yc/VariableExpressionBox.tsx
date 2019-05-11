/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Emoji from 'src/components/Emoji'
import FlexCenter from 'src/components/FlexCenter'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import ExpressionPrioritiesLabel from 'src/components/Yc/ExpressionPrioritiesLabel'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import TopLeftBadge from 'src/components/Yc/TopLeftBadge'
import { fontSizes, spaces, zIndices } from 'src/lib/theme'
import letterEmojiMapping from 'src/lib/yc/letterEmojiMapping'
import numberEmojiMapping from 'src/lib/yc/numberEmojiMapping'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'
import AlphaConvertBadge from 'src/components/Yc/AlphaConvertBadge'

interface VariableExpressionBoxProps {
  expression: VariableExpression
}

export const variableExpressionBoxPaddingTop = (
  size: ExpressionRunnerContextProps['variableSize']
) =>
  ({
    lg: spaces(0.5),
    md: spaces(0.375),
    sm: spaces(0.2)
  }[size])

export const variableExpressionBoxPaddingBottom = (
  size: ExpressionRunnerContextProps['variableSize']
) =>
  ({
    lg: spaces(0.75),
    md: spaces(0.5),
    sm: spaces(0.25)
  }[size])

export const variableExpressionBoxFontSize = (
  size: ExpressionRunnerContextProps['variableSize']
) =>
  ({
    lg: fontSizes(2.5),
    md: fontSizes(1.7),
    sm: fontSizes(1.4)
  }[size])

const VariableExpressionBox = ({ expression }: VariableExpressionBoxProps) => {
  const {
    hidePriorities,
    variableSize,
    hideBottomRightBadges,
    bottomRightBadgeOverrides,
    showOnlyFocused
  } = useContext(ExpressionRunnerContext)
  if (showOnlyFocused) {
    return <></>
  } else {
    return (
      <>
        {!hidePriorities && (
          <ExpressionPrioritiesLabel
            priorities={expression.argPriorityAgg}
            position="topleft"
            removing={expression.highlightType === 'removed'}
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
            <Emoji size="sm">
              {expression.shorthandNumber !== undefined
                ? numberEmojiMapping[expression.shorthandNumber]
                : expression.highlightType === 'removed'
                ? '💥'
                : letterEmojiMapping[expression.name]}
            </Emoji>
            {expression.shorthandFunc && (
              <span
                css={css`
                  position: absolute;
                  right: -0.2em;
                  top: -0.6em;
                  z-index: ${zIndices('badge')};
                `}
              >
                <span
                  css={css`
                    display: inline-flex;
                    font-size: 0.5em;
                    transform: translateY(0.3em);
                  `}
                >
                  <Emoji size="sm" noVerticalTransform>
                    *️⃣
                  </Emoji>
                </span>
              </span>
            )}
            {bottomRightBadgeOverrides[expression.name] && (
              <span
                css={css`
                  position: absolute;
                  right: -0.2em;
                  bottom: 0;
                  z-index: ${zIndices('badge')};
                `}
              >
                <span
                  css={css`
                    display: inline-flex;
                    font-size: 0.5em;
                    transform: translateY(0.3em);
                  `}
                >
                  <Emoji size="sm" noVerticalTransform>
                    {bottomRightBadgeOverrides[expression.name]}
                  </Emoji>
                </span>
              </span>
            )}
            {!hideBottomRightBadges &&
              expression.bottomRightBadgeType !== 'none' && (
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
            {expression.topLeftBadgeType !== 'none' && (
              <span
                css={[
                  css`
                    position: absolute;
                    top: 0;
                    z-index: ${zIndices('badge')};
                    left: -0.18em;
                  `
                ]}
              >
                <TopLeftBadge topLeftBadgeType={expression.topLeftBadgeType} />
              </span>
            )}
            {expression.alphaConvertCount > 0 && (
              <span
                css={[
                  css`
                    position: absolute;
                    top: -0.1em;
                    z-index: ${zIndices('badge')};
                    right: -0.2em;
                  `
                ]}
              >
                <AlphaConvertBadge count={expression.alphaConvertCount} />
              </span>
            )}
          </span>
        </FlexCenter>
        {!hidePriorities && (
          <ExpressionPrioritiesLabel
            priorities={expression.funcPriorityAgg}
            removing={expression.highlightType === 'removed'}
            position="bottomleft"
            emphasize={expression.emphasizePriority}
          />
        )}
      </>
    )
  }
}

export default VariableExpressionBox
