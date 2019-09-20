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
import { fontSizes, spaces, zIndices, colors } from 'src/lib/theme'
import letterEmojiMapping from 'src/lib/letterEmojiMapping'
import { VariableExpression } from 'src/types/ExpressionTypes'
import H from 'src/components/H'
import { ExpressionRunnerContextProps } from 'src/types/ExpressionRunnerTypes'
import CustomEmoji, { customEmojiToComponent } from 'src/components/CustomEmoji'
import locale from 'src/lib/locale'

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
    xxs: spaces(0.2),
    xxxs: spaces(0.2)
  }[size])

export const variableExpressionBoxPaddingBottom = (
  size: ExpressionRunnerContextProps['variableSize']
) =>
  ({
    lg: spaces(0.5),
    md: spaces(0.375),
    sm: spaces(0.25),
    xs: spaces(0.2),
    xxs: spaces(0.2),
    xxxs: spaces(0.2)
  }[size])

export const variableExpressionBoxFontSize = (
  size: ExpressionRunnerContextProps['variableSize']
) =>
  ({
    lg: fontSizes(2),
    md: fontSizes(1.6),
    sm: fontSizes(1.4),
    xs: fontSizes(1.2),
    xxs: fontSizes(1),
    xxxs: fontSizes(0.85)
  }[size])

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
          <span
            css={css`
              position: relative;
            `}
          >
            {expression.shorthandNumber !== undefined ? (
              <EmojiNumber number={expression.shorthandNumber} />
            ) : expression.shorthandNumberAfterConvert === 'blank' ? (
              <CustomEmoji type="blankNumber" />
            ) : expression.shorthandNumberAfterConvert === 'trueCase' ? (
              <CustomEmoji type="blankNumberYellow" />
            ) : expression.shorthandNumberAfterConvert === 'falseCase' ? (
              <CustomEmoji type="blankNumberRed" />
            ) : expression.shorthandNumberAfterConvert === 'condition' ? (
              <CustomEmoji type="blankNumberGreen" />
            ) : expression.shorthandNumberAfterConvert === 'binaryFirst' ? (
              <CustomEmoji type="blankNumberPurple" />
            ) : expression.shorthandNumberAfterConvert === 'binarySecond' ? (
              <CustomEmoji type="blankNumberPink" />
            ) : (
              <></>
            )}
            {!hideBottomRightBadges &&
              expression.bottomRightBadgeType !== 'none' && (
                <span
                  css={css`
                    position: absolute;
                    right: -0.2em;
                    bottom: -0.2em;
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
                    top: -0.2em;
                    z-index: ${zIndices('badge')};
                    left: -0.18em;
                  `
                ]}
              >
                <TopLeftBadge topLeftBadgeType={expression.topLeftBadgeType} />
              </span>
            )}
          </span>
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
  } else if (
    expression.name === 'blankNumber' &&
    expression.shorthandNumberPlusOrMinusOne
  ) {
    return (
      <div>
        <CustomEmoji type="blankNumber" size="sm" />{' '}
        <Emoji size="sm">
          {expression.shorthandNumberPlusOrMinusOne === 'plus' ? '➕' : '➖'}
        </Emoji>{' '}
        <EmojiNumber size="sm" number={1} />
      </div>
    )
  } else if (expression.name === 'Amult') {
    return (
      <div>
        <span
          css={[
            css`
              font-weight: bold;
              text-align: center;
              display: block;
            `,
            locale === 'en'
              ? css`
                  font-size: 0.45em;
                  background: ${colors('deepPurple50')};
                `
              : css`
                  font-size: 0.6em;
                `
          ]}
        >
          <H args={{ name: 'AmultTop' }} />
        </span>
        <span
          css={[
            css`
              font-weight: bold;
              text-align: center;
              display: block;
            `,
            locale === 'en'
              ? css`
                  font-size: 0.6em;
                `
              : css`
                  font-size: 0.45em;
                  background: ${colors('deepPurple50')};
                `
          ]}
        >
          <H args={{ name: 'AmultBottom' }} />
        </span>
      </div>
    )
  } else if (expression.name === 'Bsingle') {
    return (
      <div>
        <span
          css={[
            css`
              font-weight: bold;
              text-align: center;
              display: block;
            `,
            locale === 'en'
              ? css`
                  font-size: 0.45em;
                  background: ${colors('pink50')};
                `
              : css`
                  font-size: 0.6em;
                `
          ]}
        >
          <H args={{ name: 'BsingleTop' }} />
        </span>
        <span
          css={[
            css`
              font-weight: bold;
              text-align: center;
              display: block;
            `,
            locale === 'en'
              ? css`
                  font-size: 0.6em;
                `
              : css`
                  font-size: 0.45em;
                  background: ${colors('pink50')};
                `
          ]}
        >
          <H args={{ name: 'BsingleBottom' }} />
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
        {expression.shorthandNumber !== undefined &&
        expression.highlightType !== 'removed' ? (
          <>
            <EmojiNumber size="sm" number={expression.shorthandNumber} />
          </>
        ) : expression.shorthandFunc === 'add' &&
          expression.highlightType !== 'removed' ? (
          <CustomEmoji type="plusOne" size="sm" />
        ) : expression.shorthandFunc === 'pred' &&
          expression.highlightType !== 'removed' ? (
          <CustomEmoji type="minusOne" size="sm" />
        ) : customEmojiToComponent[
            expression.name as keyof typeof customEmojiToComponent
          ] && expression.highlightType !== 'removed' ? (
          <CustomEmoji
            type={expression.name as keyof typeof customEmojiToComponent}
            size="sm"
          />
        ) : (
          <Emoji size="sm">
            {expression.highlightType === 'removed'
              ? '💥'
              : letterEmojiMapping[expression.name]}
          </Emoji>
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
  const { hidePriorities, variableSize } = useContext(ExpressionRunnerContext)
  const { conditionalState } = useContext(ConditionalContext)
  return (
    <>
      {!hidePriorities && (
        <ExpressionPrioritiesLabel
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
          padding: ${variableExpressionBoxPaddingTop(variableSize)}
            ${spaces(0.5)} ${variableExpressionBoxPaddingBottom(variableSize)};
        `}
      >
        <VariableEmoji expression={expression} />
      </FlexCenter>
      {!hidePriorities && (
        <ExpressionPrioritiesLabel
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

export default VariableExpressionBox
