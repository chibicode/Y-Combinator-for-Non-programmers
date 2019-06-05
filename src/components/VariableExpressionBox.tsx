/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Emoji from 'src/components/Emoji'
import FlexCenter from 'src/components/FlexCenter'
import BottomRightBadge from 'src/components/BottomRightBadge'
import ExpressionPrioritiesLabel from 'src/components/ExpressionPrioritiesLabel'
import ExpressionRunnerContext, {
  ExpressionRunnerContextProps
} from 'src/components/ExpressionRunnerContext'
import ConditionalContext from 'src/components/ConditionalContext'
import TopLeftBadge from 'src/components/TopLeftBadge'
import TopRightBadge from 'src/components/TopRightBadge'
import { fontSizes, spaces, zIndices, colors, radii } from 'src/lib/theme'
import letterEmojiMapping from 'src/lib/letterEmojiMapping'
import numberEmojiMapping from 'src/lib/numberEmojiMapping'
import { VariableExpression } from 'src/types/ExpressionTypes'
import H from 'src/components/H'

interface VariableExpressionBoxProps {
  expression: VariableExpression
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

const SecretCodeLabel = ({ minusOne }: { minusOne?: boolean }) => (
  <span
    css={[
      css`
        font-size: 0.6em;
        background: ${colors('secretCode')};
        color: #fff;
        padding: 0.25em 0.75em;
        border-radius: ${radii(0.25)};
        font-weight: bold;
        display: inline-block;
      `,
      !minusOne &&
        css`
          transform: translateY(-0.1em);
        `
    ]}
  >
    <H
      args={{
        name: 'secretCodeLabel',
        minusOne: minusOne
      }}
    />
  </span>
)

const VariableEmoji = ({ expression }: VariableExpressionBoxProps) => {
  const { hideBottomRightBadges, bottomRightBadgeOverrides } = useContext(
    ExpressionRunnerContext
  )

  if (expression.name === 'someNumber') {
    return (
      <div>
        <SecretCodeLabel />
      </div>
    )
  } else if (expression.name === 'questionTimesSomeNumberMinusOne') {
    return (
      <div
        css={css`
          text-align: center;
          width: 100%;
        `}
      >
        <div
          css={css`
            border: 2px solid ${colors('indigo300')};
            margin: ${spaces(0.25)} ${spaces(0.75)};
            padding: ${spaces(0.25)};
            background: ${colors('indigo400')};
          `}
        >
          <Emoji>❔</Emoji>
        </div>
        <div
          css={css`
            font-size: 0.6em;
            opacity: 0.5;
            margin-top: 0.5em;
          `}
        >
          <Emoji>✖️</Emoji>
        </div>
        <div
          css={css`
            margin-bottom: 0.25em;
          `}
        >
          <SecretCodeLabel minusOne />
        </div>
      </div>
    )
  } else {
    return (
      <span
        css={css`
          position: relative;
        `}
      >
        <Emoji size="sm">
          {expression.highlightType === 'removed'
            ? '💥'
            : expression.shorthandNumber !== undefined
            ? numberEmojiMapping[expression.shorthandNumber]
            : expression.shorthandBinary !== undefined
            ? '✖️'
            : letterEmojiMapping[expression.name]}
        </Emoji>
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
