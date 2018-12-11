import { css, cx } from 'emotion'
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

const TopRightBadge: React.SFC<TopRightBadgeProps> = ({
  topRightBadgeType,
  inline
}) => (
  <span
    className={cx(
      css`
        align-items: center;
        justify-content: center;
      `,
      {
        [css`
          display: flex;
          font-size: 0.5em;
        `]: !inline,
        [css`
          display: inline-flex;
          font-size: 1em;
          transform: translateY(0.15em);
        `]: inline
      }
    )}
  >
    {topRightBadgeType !== 'betaReduceCallArg' && (
      <Emoji noVerticalTransform>
        {topRightBadgeTypeToEmoji(topRightBadgeType)}
      </Emoji>
    )}
  </span>
)

export default TopRightBadge
