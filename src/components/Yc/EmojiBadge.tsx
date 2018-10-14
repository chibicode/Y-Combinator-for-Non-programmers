import { css, cx } from 'emotion'
import React from 'react'
import Emoji from 'src/components/Emoji'
import { ExpressionHighlighterContextProps } from 'src/components/Yc/ExpressionHighlighterContext'
import { colors } from 'src/lib/theme'

interface EmojiBadgeProps {
  badgeType:
    | Required<ExpressionHighlighterContextProps>['highlightType']
    | 'wasJustBetaReduced'
  inline?: boolean
}

const funcArgColor = colors('pink400')

const badgeTypeToColors = (x: EmojiBadgeProps['badgeType']) =>
  ({
    callArg: css`
      border-color: ${colors('indigo300')};
    `,
    funcArg: css`
      border-color: ${funcArgColor};
    `,
    funcBody: css`
      border-color: ${colors('yellow800')};
    `,
    wasJustBetaReduced: css`
      border-color: ${colors('indigo300')};
    `
  }[x])

const sqrt2Div2 = Math.sqrt(2) / 2
const sqrt3Div3 = Math.sqrt(3) / 3
const circleWidth = 1.5
const hexWidth = 1.4
const squareWidth = 1.35
const squareAdjustTop = -0.07
const hexAdjustTop = -0.35
const sqrt2Border = 2 * Math.sqrt(2)

const badgeTypeToShapeAndSize = (x: EmojiBadgeProps['badgeType']) =>
  ({
    callArg: css`
      width: ${squareWidth}em;
      height: ${squareWidth}em;
      transform: translateY(${squareAdjustTop}em);
      border-width: 2px;
      border-style: solid;
      background-color: #fff;
    `,
    wasJustBetaReduced: css`
      position: relative;
      bottom: 0.1em;
      right: 0.05em;
    `,
    funcArg: css`
      width: ${hexWidth}em;
      height: ${hexWidth * sqrt3Div3}em;
      position: relative;
      border-left-width: 2px;
      border-left-style: solid;
      border-right-width: 2px;
      border-right-style: solid;
      transform: translateY(${hexAdjustTop}em);
      background-color: #fff;

      &:before,
      &:after {
        content: '';
        position: absolute;
        width: ${hexWidth * sqrt2Div2}em;
        height: ${hexWidth * sqrt2Div2}em;
        transform: scaleY(${sqrt3Div3}) rotate(-45deg);
        background-color: inherit;
      }

      &:before {
        top: ${(hexWidth * sqrt2Div2) / -2}em;
        border-top: ${sqrt2Border}px solid ${funcArgColor};
        border-right: ${sqrt2Border}px solid ${funcArgColor};
      }

      &:after {
        bottom: ${(hexWidth * sqrt2Div2) / -2}em;
        border-bottom: ${sqrt2Border}px solid ${funcArgColor};
        border-left: ${sqrt2Border}px solid ${funcArgColor};
      }
    `,
    funcBody: css`
      border-radius: 100%;
      width: ${circleWidth}em;
      height: ${circleWidth}em;
      border-width: 2px;
      border-style: solid;
      background-color: #fff;
    `
  }[x])

const badgeTypeToEmoji = (x: EmojiBadgeProps['badgeType']) =>
  ({
    callArg: '👨‍🍳',
    funcArg: '😋',
    funcBody: '🍽',
    wasJustBetaReduced: '🆕'
  }[x])

const inlineVerticalOffset = (x: EmojiBadgeProps['badgeType']) =>
  ({
    callArg: 0.05,
    funcArg: 0.15 + hexAdjustTop,
    funcBody: 0.2,
    wasJustBetaReduced: 0
  }[x])

const EmojiBadge: React.SFC<EmojiBadgeProps> = ({ badgeType, inline }) => (
  <span
    className={cx(
      css`
        align-items: center;
        justify-content: center;
      `,
      badgeTypeToColors(badgeType),
      badgeTypeToShapeAndSize(badgeType),
      {
        [css`
          display: flex;
          /* Font size varies depending on emoji size */
          font-size: ${badgeType === 'wasJustBetaReduced'
            ? '0.55em'
            : '0.45em'};
        `]: !inline,
        [css`
          display: inline-flex;
          font-size: 1em;
          vertical-align: text-bottom;
          transform: translateY(${inlineVerticalOffset(badgeType)}em);
        `]: inline
      }
    )}
  >
    <span
      className={cx(
        css`
          position: relative;
          z-index: 2;
          display: inline-flex;
        `
      )}
    >
      <Emoji noVerticalTransform>{badgeTypeToEmoji(badgeType)}</Emoji>
    </span>
  </span>
)

export default EmojiBadge
