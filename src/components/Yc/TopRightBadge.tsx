/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import Emoji from 'src/components/Emoji'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

interface TopRightBadgeProps {
  topRightBadgeType: Exclude<VariableExpression['topRightBadgeType'], 'none'>
  inline?: boolean
}

const topRightBadgeTypeToEmoji = (
  x: Exclude<TopRightBadgeProps['topRightBadgeType'], 'betaReduceCallArg'>
) =>
  ({
    betaReduced: '🆕',
    match: '✅',
    unmatch: '❌',
    conflict: '🔀',
    conflictResolved: '🆕'
  }[x])

const TopRightBadge: React.FC<TopRightBadgeProps> = ({
  topRightBadgeType,
  inline
}) => (
  <span
    css={[
      css`
        align-items: center;
        justify-content: center;
      `,
      !inline &&
        css`
          display: flex;
          font-size: 0.5em;
        `,
      inline &&
        css`
          display: inline-flex;
          font-size: 1em;
          transform: translateY(0.15em);
        `
    ]}
  >
    {topRightBadgeType !== 'betaReduceCallArg' && (
      <Emoji noVerticalTransform>
        {topRightBadgeTypeToEmoji(topRightBadgeType)}
      </Emoji>
    )}
  </span>
)

export default TopRightBadge
