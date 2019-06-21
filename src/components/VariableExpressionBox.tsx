/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import FlexCenter from 'src/components/FlexCenter'
import BottomRightBadge from 'src/components/BottomRightBadge'
import ExpressionPrioritiesLabel from 'src/components/ExpressionPrioritiesLabel'
import ExpressionRunnerContext from 'src/components/ExpressionRunnerContext'
import ConditionalContext from 'src/components/ConditionalContext'
import TopLeftBadge from 'src/components/TopLeftBadge'
import TopRightBadge from 'src/components/TopRightBadge'
import { fontSizes, spaces, zIndices, colors, radii } from 'src/lib/theme'
import letterEmojiMapping from 'src/lib/letterEmojiMapping'
import { VariableExpression } from 'src/types/ExpressionTypes'
import H from 'src/components/H'
import { ExpressionRunnerContextProps } from 'src/types/ExpressionRunnerTypes'

interface VariableExpressionBoxProps {
  expression: VariableExpression
}

export const variableExpressionBoxPaddingTop = (
  size: ExpressionRunnerContextProps['variableSize']
) =>
  ({
    lg: spaces(0.375),
    md: spaces(0.25),
    sm: spaces(0.2),
    xs: spaces(0.2),
    xxs: spaces(0.2)
  }[size])

export const variableExpressionBoxPaddingBottom = (
  size: ExpressionRunnerContextProps['variableSize']
) =>
  ({
    lg: spaces(0.5),
    md: spaces(0.375),
    sm: spaces(0.25),
    xs: spaces(0.2),
    xxs: spaces(0.2)
  }[size])

export const variableExpressionBoxFontSize = (
  size: ExpressionRunnerContextProps['variableSize']
) =>
  ({
    lg: fontSizes(2),
    md: fontSizes(1.6),
    sm: fontSizes(1.4),
    xs: fontSizes(1.2),
    xxs: fontSizes(1)
  }[size])

const SecretCodeLabel = ({ number }: { number?: number }) => (
  <span
    css={css`
      font-size: 0.6em;
      background: ${colors('secretCode')};
      color: #fff;
      padding: 0.25em 0.75em;
      border-radius: ${radii(0.25)};
      font-weight: bold;
      display: inline-block;
      transform: translateY(-0.1em);
    `}
  >
    <H
      args={{
        name: 'secretCode'
      }}
    />
    {number && <> – {number}</>}
  </span>
)

const VariableEmoji = ({ expression }: VariableExpressionBoxProps) => {
  const { hideBottomRightBadges, bottomRightBadgeOverrides } = useContext(
    ExpressionRunnerContext
  )

  if (expression.name === 'someNumber') {
    return (
      <div>
        <SecretCodeLabel number={expression.shorthandNumber} />
      </div>
    )
  } else if (expression.name === 'abbreviated') {
    return (
      <div>
        <span
          css={css`
            font-size: 0.6em;
            font-weight: bold;
            color: ${colors('grey600')};
            padding: 0.25em 0.75em;
            transform: translateY(-0.1em);
            display: inline-block;
          `}
        >
          (<H args={{ name: 'abbreviated' }} />)
        </span>
      </div>
    )
  } else if (expression.name === 'Amult') {
    return (
      <div>
        <span
          css={css`
            font-size: 0.6em;
            font-weight: bold;
            text-align: center;
            display: block;
          `}
        >
          <H args={{ name: 'AmultTop' }} />
        </span>
        <span
          css={css`
            font-size: 0.45em;
            font-weight: bold;
            text-align: center;
            display: block;
          `}
        >
          <H args={{ name: 'AmultBottom' }} />
        </span>
      </div>
    )
  } else {
    return (
      <span
        css={css`
          position: relative;
        `}
      >
        {expression.shorthandNumber !== undefined ? (
          <EmojiNumber size="sm" number={expression.shorthandNumber} />
        ) : (
          <Emoji size="sm">
            {expression.highlightType === 'removed'
              ? '💥'
              : expression.shorthandBinary !== undefined
              ? '✖️'
              : letterEmojiMapping[expression.name]}
          </Emoji>
        )}
        {expression.shorthandUnary && (
          <span
            css={css`
              position: absolute;
              right: -0.23em;
              top: -0.05em;
              z-index: ${zIndices('badge')};
            `}
          >
            <TopRightBadge topRightBadgeType={expression.shorthandUnary} />
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
                font-size: 0.6em;
                transform: translateY(0.3em);
              `}
            >
              <Emoji size="sm" noVerticalTransform>
                {bottomRightBadgeOverrides[expression.name]}
              </Emoji>
            </span>
          </span>
        )}
        {!hideBottomRightBadges && expression.bottomRightBadgeType !== 'none' && (
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
      </span>
    )
  }
}

const VariableExpressionBox = ({ expression }: VariableExpressionBoxProps) => {
  const { hidePriorities, variableSize, showOnlyFocused } = useContext(
    ExpressionRunnerContext
  )
  const { conditionalState } = useContext(ConditionalContext)
  if (showOnlyFocused) {
    return <></>
  } else {
    return (
      <>
        {!hidePriorities && (
          <ExpressionPrioritiesLabel
            hideActive={
              conditionalState === 'trueCaseOnly' ||
              conditionalState === 'falseCaseOnly'
            }
            priorities={expression.argPriorityAgg}
            position="topleft"
            removing={expression.highlightType === 'removed'}
            emphasize={
              expression.emphasizePriority ||
              !!(conditionalState && conditionalState !== 'default')
            }
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
          <VariableEmoji expression={expression} />
        </FlexCenter>
        {!hidePriorities && (
          <ExpressionPrioritiesLabel
            hideActive={
              conditionalState === 'trueCaseOnly' ||
              conditionalState === 'falseCaseOnly'
            }
            priorities={expression.funcPriorityAgg}
            removing={expression.highlightType === 'removed'}
            position="bottomleft"
            emphasize={
              expression.emphasizePriority ||
              !!(conditionalState && conditionalState !== 'default')
            }
          />
        )}
      </>
    )
  }
}

export default VariableExpressionBox
