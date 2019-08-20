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
import CustomEmoji, { customEmojiToComponent } from 'src/components/CustomEmoji'

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

const SecretCodeLabelWrapper = ({
  children,
  operator
}: {
  operator?: boolean
  children: React.ReactNode
}) => (
  <span
    css={css`
      font-size: ${operator ? 0.5 : 0.6}em;
      background: ${colors(operator ? 'grey700' : 'secretCode')};
      color: #fff;
      padding: 0.25em 0.75em;
      border-radius: ${radii(0.25)};
      font-weight: bold;
      display: inline-block;
      transform: translateY(${operator ? -0.3 : -0.1}em);
    `}
  >
    {children}
  </span>
)

const SecretCodeLabel = ({ number }: { number?: number }) => (
  <SecretCodeLabelWrapper>
    <H
      args={{
        name: 'secretCode'
      }}
    />
    {number && <> – {number}</>}
  </SecretCodeLabelWrapper>
)

const RemainderLabel = () => (
  <SecretCodeLabelWrapper operator>
    <H args={{ name: 'remainder' }} />
  </SecretCodeLabelWrapper>
)

const shorthandBinary = (
  shorthandBinary: NonNullable<VariableExpression['shorthandBinary']>
) => {
  if (shorthandBinary === 'mult') {
    return '✖️'
  } else {
    return '➕'
  }
}

const VariableEmoji = ({ expression }: VariableExpressionBoxProps) => {
  const { hideBottomRightBadges, bottomRightBadgeOverrides } = useContext(
    ExpressionRunnerContext
  )

  if (expression.shorthandNumberAfterConvert) {
    return (
      <div
        css={css`
          margin-top: ${spaces(0.125)};
          padding: 0.25em 0;
        `}
      >
        <span
          css={css`
            font-weight: bold;
            text-align: center;
            display: block;
          `}
        >
          {expression.shorthandNumber ? (
            <EmojiNumber number={expression.shorthandNumber} />
          ) : (
            <CustomEmoji type="blankNumber" />
          )}
        </span>
        <span
          css={css`
            font-size: 0.6em;
            font-weight: bold;
            text-align: center;
            display: block;
          `}
        >
          <H
            args={{
              name: 'canBeConverted'
            }}
          />
        </span>
      </div>
    )
  } else if (expression.name === 'someNumber') {
    return (
      <div>
        <SecretCodeLabel number={expression.shorthandNumber} />
      </div>
    )
  } else if (expression.shorthandBinary === 'remainder') {
    return (
      <div>
        <RemainderLabel />
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
  } else if (expression.name === 'blankNumber') {
    return (
      <div>
        <CustomEmoji type="blankNumber" size="sm" />
        {expression.shorthandNumberPlusOrMinusOne && (
          <>
            {' '}
            <Emoji size="sm">
              {expression.shorthandNumberPlusOrMinusOne === 'plus'
                ? '➕'
                : '➖'}
            </Emoji>{' '}
            <EmojiNumber size="sm" number={1} />
          </>
        )}
      </div>
    )
  } else if (expression.name === 'questionV2') {
    return (
      <div>
        <CustomEmoji type="blankNumber" size="sm" />
      </div>
    )
  } else if (expression.name === 'verticalDotDotDot') {
    return (
      <div>
        <CustomEmoji type="verticalDotDotDot" size="sm" />
      </div>
    )
  } else if (expression.name === 'questionFoodGrey') {
    return (
      <div>
        <CustomEmoji type="questionFoodGrey" size="sm" />
      </div>
    )
  } else if (expression.name === 'questionFoodRed') {
    return (
      <div>
        <CustomEmoji type="questionFoodRed" size="sm" />
      </div>
    )
  } else if (
    expression.name === 'C' ||
    expression.name === 'D' ||
    expression.name === 'E' ||
    expression.name === 'F'
  ) {
    return (
      <div>
        <CustomEmoji type={expression.name} size="sm" />
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
  } else if (expression.shorthandFunc === 'add') {
    return (
      <div>
        <CustomEmoji type="plusOne" size="sm" />
      </div>
    )
  } else if (expression.shorthandFunc === 'pred') {
    return (
      <div>
        <CustomEmoji type="minusOne" size="sm" />
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
          <>
            <EmojiNumber size="sm" number={expression.shorthandNumber} />
          </>
        ) : (
          <Emoji size="sm">
            {expression.highlightType === 'removed'
              ? '💥'
              : expression.shorthandBinary !== undefined
              ? shorthandBinary(expression.shorthandBinary)
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
              {customEmojiToComponent[
                bottomRightBadgeOverrides[
                  expression.name
                ] as keyof typeof customEmojiToComponent
              ] ? (
                <CustomEmoji
                  type={
                    bottomRightBadgeOverrides[
                      expression.name
                    ] as keyof typeof customEmojiToComponent
                  }
                  size="sm"
                  noVerticalTransform
                />
              ) : (
                <Emoji size="sm" noVerticalTransform>
                  {bottomRightBadgeOverrides[expression.name]}
                </Emoji>
              )}
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
