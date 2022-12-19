/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/react'
import locale from 'src/lib/locale'
import { colors } from 'src/lib/theme'
import { VariableExpression } from 'src/types/ExpressionTypes'

export interface BottomRightBadgeProps {
  bottomRightBadgeType: Exclude<
    VariableExpression['bottomRightBadgeType'],
    'none'
  >
  inline?: boolean
}

const bottomRightBadgeTypeToColors = (
  x: BottomRightBadgeProps['bottomRightBadgeType']
): SerializedStyles =>
  ({
    callArg: css`
      background-color: ${colors('indigo300')};
      border-color: ${colors('indigo500')};
    `,
    funcArg: css`
      background-color: ${colors('pink400')};
      border-color: ${colors('pink700')};
    `,
    funcUnbound: css`
      background-color: ${colors('green400')};
      border-color: ${colors('green600')};
    `,
    funcBound: css`
      background-color: ${colors('yellow900')};
      border-color: ${colors('deepOrange800')};
    `
  }[x])

const bottomRightBadgeTypeToText = (
  x: BottomRightBadgeProps['bottomRightBadgeType']
) =>
  locale === 'jp'
    ? {
        callArg: '上',
        funcArg: '左',
        funcBound: '右',
        funcUnbound: '中'
      }[x]
    : {
        callArg: 't',
        funcArg: 'l',
        funcBound: 'r',
        funcUnbound: 'm'
      }[x]

const BottomRightBadge = ({
  bottomRightBadgeType,
  inline
}: BottomRightBadgeProps) => (
  <span
    css={[
      css`
        align-items: center;
        justify-content: center;
        color: ${colors('white')};
        line-height: 1;
        width: 1.5em;
        font-weight: bold;
        font-style: normal;
        height: 1.5em;
        text-transform: uppercase;
        border-radius: 100%;
        border-width: 2px;
        border-style: solid;
      `,
      bottomRightBadgeTypeToColors(bottomRightBadgeType),
      !inline &&
        css`
          display: flex;
          font-size: 0.35em;
          user-select: none;
        `,
      inline &&
        css`
          display: inline-flex;
          font-size: 0.85em;
          transform: translateY(-0.05em);
        `
    ]}
  >
    <span
      css={
        locale === 'jp' &&
        css`
          transform: translateY(-0.05em);
        `
      }
    >
      {bottomRightBadgeTypeToText(bottomRightBadgeType)}
    </span>
  </span>
)

export default BottomRightBadge
