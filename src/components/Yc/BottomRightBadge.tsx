/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import locale from 'src/lib/locale'
import { colors } from 'src/lib/theme'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

interface BottomRightBadgeProps {
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
      border-color: ${colors('indigo400')};
    `,
    funcArg: css`
      background-color: ${colors('pink400')};
      border-color: ${colors('pink600')};
    `,
    funcUnbound: css`
      background-color: ${colors('grey700')};
      border-color: ${colors('grey800')};
    `,
    funcBound: css`
      background-color: ${colors('yellow900')};
      border-color: ${colors('orange900')};
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

const BottomRightBadge: React.FunctionComponent<BottomRightBadgeProps> = ({
  bottomRightBadgeType,
  inline
}) => (
  <span
    css={[
      css`
        align-items: center;
        justify-content: center;
        color: ${colors('white')};
        line-height: 1;
        width: 1.35em;
        font-weight: bold;
        height: 1.35em;
        text-transform: uppercase;
        border-radius: 100%;
        border-width: 2px;
        border-style: solid;
      `,
      bottomRightBadgeTypeToColors(bottomRightBadgeType),
      !inline &&
        css`
          display: flex;
          font-size: 0.4em;
        `,
      inline &&
        css`
          display: inline-flex;
          font-size: 0.85em;
          transform: translateY(-0.1em);
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
