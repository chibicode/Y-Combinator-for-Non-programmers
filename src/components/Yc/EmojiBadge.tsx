import { css, cx } from 'emotion'
import React from 'react'
import { colors } from 'src/lib/theme'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

interface EmojiBadgeProps {
  bottomRightBadgeType: Exclude<
    VariableExpression['bottomRightBadgeType'],
    'none'
  >
  inline?: boolean
}

const bottomRightBadgeTypeToColors = (
  x: EmojiBadgeProps['bottomRightBadgeType']
): string =>
  ({
    callArg: css`
      background-color: ${colors('indigo400')};
      border-color: ${colors('indigo500')};
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
  x: EmojiBadgeProps['bottomRightBadgeType']
) =>
  ({
    callArg: 't',
    funcArg: 'l',
    funcBound: 'r',
    funcUnbound: 'm'
  }[x])

const EmojiBadge: React.SFC<EmojiBadgeProps> = ({
  bottomRightBadgeType,
  inline
}) => (
  <span
    className={cx(
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
      {
        [css`
          display: flex;
          font-size: 0.4em;
        `]: !inline,
        [css`
          display: inline-flex;
          font-size: 0.85em;
          transform: translateY(-0.1em);
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
      {bottomRightBadgeTypeToText(bottomRightBadgeType)}
    </span>
  </span>
)

export default EmojiBadge
